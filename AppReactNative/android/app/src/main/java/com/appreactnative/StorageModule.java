package com.appreactnative;

import android.content.ContentValues;
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

import static com.appreactnative.ReactDatabaseSupplier.KEY_COLUMN;

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
        ContentValues values = new ContentValues();
        values.put(ReactDatabaseSupplier.KEY_COLUMN, key);
        values.put(ReactDatabaseSupplier.VALUE_COLUMN, value);

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

            mReactDatabaseSupplier.get().replace(
                    ReactDatabaseSupplier.TABLE_CATALYST,
                    null,
                    values
            );

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

        WritableArray data = Arguments.createArray();

        Cursor cursor = mReactDatabaseSupplier.get().query(
                ReactDatabaseSupplier.TABLE_CATALYST,
                new String[] { ReactDatabaseSupplier.VALUE_COLUMN },
                KEY_COLUMN + " = ?",
                new String[] { key },
                null,
                null,
                null,
                "1"
        );

        try {
            if (cursor.moveToFirst()) {
                callback.invoke(null, cursor.getString(0));
            } else {
                callback.invoke(null, null);
            }
        } catch (Exception e) {
            FLog.w(ReactConstants.TAG, e.getMessage(), e);
            callback.invoke(StorageErrorUtil.getError(null, e.getMessage()), null);
            return;
        } finally {
            cursor.close();
        }
    }

    @ReactMethod
    public void deleteItem(String key) {
        
    }
}
