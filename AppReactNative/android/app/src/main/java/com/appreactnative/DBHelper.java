package com.appreactnative;

import android.content.Context;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;

import androidx.annotation.Nullable;

public class DBHelper extends SQLiteOpenHelper {
    static final String DATABASE_NAME = "RNStorage";

    static final int DATABASE_VERSION = 1;

    static final String TABLE_NAME = "RNLocalStorage";
    static final String KEY_ID = "_id";
    static final String KEY_COLUMN = "key_column";
    static final String VALUE_COLUMN = "value_column";

    public DBHelper(@Nullable Context context) {
        super(context, DATABASE_NAME, null, DATABASE_VERSION);
    }

    @Override
    public void onCreate(SQLiteDatabase db) {
        db.execSQL("CREATE TABLE " + TABLE_NAME + "(" + KEY_ID +
                " INTEGER PRIMARY KEY," + KEY_COLUMN + " TEXT," + VALUE_COLUMN + " TEXT" + ")");
    }

    @Override
    public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {
        db.execSQL("DROP TABLE IF EXISTS " + TABLE_NAME);

        onCreate(db);
    }
}
