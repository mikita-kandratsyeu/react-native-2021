package com.appreactnative;

import android.database.Cursor;
import android.database.sqlite.SQLiteStatement;

import androidx.annotation.NonNull;

import com.facebook.common.logging.FLog;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.common.ReactConstants;

import java.util.HashSet;

public class StorageModule extends ReactContextBaseJavaModule {

    public ReactDatabaseSupplier mReactDatabaseSupplier;
    private boolean mShuttingDown = false;

    public StorageModule(ReactApplicationContext context) {
        super(context);
        mReactDatabaseSupplier = ReactDatabaseSupplier.getInstance(context);
    }

    private boolean ensureDatabase() {
        return !mShuttingDown && mReactDatabaseSupplier.ensureDatabase();
    }

    @NonNull
    @Override
    public String getName() {
        return "StorageModule";
    }

    @ReactMethod
    public void insertItem(final String key, final String value, final Callback callback) {
        String sql = "INSERT OR REPLACE INTO " + ReactDatabaseSupplier.TABLE_CATALYST + " VALUES (?, ?);";

        SQLiteStatement statement = mReactDatabaseSupplier.get().compileStatement(sql);

        WritableMap error = null;

        try {
            mReactDatabaseSupplier.get().beginTransaction();

            if (key == null) {
                error = StorageErrorUtil.getInvalidKeyError(null);
                return;
            }

            if (value == null) {
                error = StorageErrorUtil.getInvalidValueError(null);
                return;
            }


            statement.clearBindings();
            statement.bindString(1, key);
            statement.bindString(2, value);
            statement.execute();

            mReactDatabaseSupplier.get().setTransactionSuccessful();
        } catch (Exception e) {
            FLog.w(ReactConstants.TAG, e.getMessage(), e);
            error = StorageErrorUtil.getError(null, e.getMessage());
        } finally {
            try {
                mReactDatabaseSupplier.get().endTransaction();
            } catch (Exception e) {
                FLog.w(ReactConstants.TAG, e.getMessage(), e);

                if (error == null) {
                    error = StorageErrorUtil.getError(null, e.getMessage());
                }
            }
        }

        if (error != null) {
            callback.invoke(error);
        } else {
            callback.invoke();
        }

    }

    @ReactMethod
    public void getItem(final String key, final Callback callback) {
        if (key == null) {
            callback.invoke(StorageErrorUtil.getInvalidKeyError(null), null);
            return;
        }

        if (!ensureDatabase()) {
            callback.invoke(StorageErrorUtil.getDBError(null), null);
            return;
        }

        String[] columns = {ReactDatabaseSupplier.KEY_COLUMN, ReactDatabaseSupplier.VALUE_COLUMN};

        WritableArray data = Arguments.createArray();

        Cursor cursor = mReactDatabaseSupplier.get().query(
                ReactDatabaseSupplier.TABLE_CATALYST,
                columns,
                StorageUtil.buildKeySelection(1),
                null,
                null,
                null,
                null
        );

        try {
            if (cursor.moveToFirst()) {
                do {
                    WritableArray row = Arguments.createArray();
                    row.pushString(cursor.getString(0));
                    row.pushString(cursor.getString(1));
                    data.pushArray(row);
                } while (cursor.moveToNext());
            }
        } catch (Exception e) {
            FLog.w(ReactConstants.TAG, e.getMessage(), e);
            callback.invoke(StorageErrorUtil.getError(null, e.getMessage()), null);
            return;
        } finally {
            cursor.close();
        }

        WritableArray row = Arguments.createArray();
        row.pushString(key);
        row.pushNull();
        data.pushArray(row);

        callback.invoke(null, data);
    }

    @ReactMethod
    public void deleteItem(String key) {

    }
}
