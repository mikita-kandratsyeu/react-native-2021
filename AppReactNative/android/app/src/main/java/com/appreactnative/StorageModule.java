package com.appreactnative;

import android.content.ContentValues;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;

import androidx.annotation.NonNull;

import com.facebook.common.logging.FLog;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
import com.facebook.react.common.ReactConstants;

public class StorageModule extends ReactContextBaseJavaModule {

    DBHelper dbHelper;

    public StorageModule(ReactApplicationContext context) {
        super(context);
        dbHelper = new DBHelper(context);
    }

    @NonNull
    @Override
    public String getName() {
        return "StorageModule";
    }

    @ReactMethod
    public void insertItem(final String key, final String value, final Callback callback) {
        SQLiteDatabase database = dbHelper.getWritableDatabase();

        ContentValues contentValues = new ContentValues();

        WritableMap error = null;

        try {
            if (key == null) {
                error = StorageErrorUtil.getInvalidKeyError(null);
                return;
            }

            if (value == null) {
                error = StorageErrorUtil.getInvalidValueError(null);
                return;
            }

            contentValues.put(DBHelper.KEY_COLUMN, key);
            contentValues.put(DBHelper.VALUE_COLUMN, value);

            database.insert(DBHelper.TABLE_NAME, null, contentValues);
        } catch (Exception e) {
            FLog.w(ReactConstants.TAG, e.getMessage(), e);
            error = StorageErrorUtil.getError(null, e.getMessage());
        } finally {
            if (error != null) {
                callback.invoke(error);
            } else {
                callback.invoke(null, null);
            }
        }
    }

    @ReactMethod
    public void getItem(final String key, final Callback callback) {
        SQLiteDatabase database = dbHelper.getWritableDatabase();

        WritableMap error = null;

        WritableNativeMap values = new WritableNativeMap();

        try (Cursor cursor = database.query(DBHelper.TABLE_NAME, null, null,
                null, null, null, null)) {
            if (key == null) {
                error = StorageErrorUtil.getInvalidKeyError(null);
                return;
            }

            if (cursor.moveToFirst()) {
                int keyColumnIndex = cursor.getColumnIndex(DBHelper.KEY_COLUMN);
                int valueColumnIndex = cursor.getColumnIndex(DBHelper.VALUE_COLUMN);

                do {
                    values.putString(cursor.getString(keyColumnIndex), cursor.getString(valueColumnIndex));
                } while (cursor.moveToNext());
            }
        } catch (Exception e) {
            FLog.w(ReactConstants.TAG, e.getMessage(), e);
            error = StorageErrorUtil.getError(null, e.getMessage());
        } finally {
            if (error != null) {
                callback.invoke(error);
            } else {
                if (values.hasKey(key)) {
                    callback.invoke(null, values);
                } else {
                    callback.invoke(null, null);
                }
            }
        }
    }

    @ReactMethod
    public void deleteTable(final Callback callback) {
        SQLiteDatabase database = dbHelper.getWritableDatabase();

        WritableMap error = null;

        try {
            database.delete(DBHelper.TABLE_NAME, null, null);
        } catch (Exception e) {
            FLog.w(ReactConstants.TAG, e.getMessage(), e);
            error = StorageErrorUtil.getError(null, e.getMessage());
        } finally {
            if (error != null) {
                callback.invoke(error);
            } else {
                callback.invoke(null, null);
            }
        }
    }
}
