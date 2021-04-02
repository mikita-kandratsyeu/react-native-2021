package com.appreactnative;

import javax.annotation.Nullable;

import java.util.Arrays;
import java.util.Iterator;

import android.content.ContentValues;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.text.TextUtils;

import com.facebook.react.bridge.ReadableArray;

import org.json.JSONException;
import org.json.JSONObject;

import static com.appreactnative.ReactDatabaseSupplier.KEY_COLUMN;
import static com.appreactnative.ReactDatabaseSupplier.TABLE_CATALYST;
import static com.appreactnative.ReactDatabaseSupplier.VALUE_COLUMN;

public class StorageUtil {
    static String buildKeySelection(int selectionCount) {
        String[] list = new String[selectionCount];
        Arrays.fill(list, "?");
        return KEY_COLUMN + " IN (" + TextUtils.join(", ", list) + ")";
    }

    static String[] buildKeySelectionArgs(ReadableArray keys, int start, int count) {
        String[] selectionArgs = new String[count];
        for (int keyIndex = 0; keyIndex < count; keyIndex++) {
            selectionArgs[keyIndex] = keys.getString(start + keyIndex);
        }
        return selectionArgs;
    }

    public static @Nullable
    String getItemImpl(SQLiteDatabase db, String key) {
        String[] columns = {VALUE_COLUMN};
        String[] selectionArgs = {key};

        Cursor cursor = db.query(
                TABLE_CATALYST,
                columns,
                KEY_COLUMN + "=?",
                selectionArgs,
                null,
                null,
                null);

        try {
            if (!cursor.moveToFirst()) {
                return null;
            } else {
                return cursor.getString(0);
            }
        } finally {
            cursor.close();
        }
    }

    static boolean setItemImpl(SQLiteDatabase db, String key, String value) {
        ContentValues contentValues = new ContentValues();
        contentValues.put(KEY_COLUMN, key);
        contentValues.put(VALUE_COLUMN, value);

        long inserted = db.insertWithOnConflict(
                TABLE_CATALYST,
                null,
                contentValues,
                SQLiteDatabase.CONFLICT_REPLACE);

        return (-1 != inserted);
    }

    static boolean mergeImpl(SQLiteDatabase db, String key, String value)
            throws JSONException {
        String oldValue = getItemImpl(db, key);
        String newValue;

        if (oldValue == null) {
            newValue = value;
        } else {
            JSONObject oldJSON = new JSONObject(oldValue);
            JSONObject newJSON = new JSONObject(value);
            deepMergeInto(oldJSON, newJSON);
            newValue = oldJSON.toString();
        }

        return setItemImpl(db, key, newValue);
    }

    private static void deepMergeInto(JSONObject oldJSON, JSONObject newJSON)
            throws JSONException {
        Iterator<?> keys = newJSON.keys();
        while (keys.hasNext()) {
            String key = (String) keys.next();

            JSONObject newJSONObject = newJSON.optJSONObject(key);
            JSONObject oldJSONObject = oldJSON.optJSONObject(key);
            if (newJSONObject != null && oldJSONObject != null) {
                deepMergeInto(oldJSONObject, newJSONObject);
                oldJSON.put(key, oldJSONObject);
            } else {
                oldJSON.put(key, newJSON.get(key));
            }
        }
    }
}