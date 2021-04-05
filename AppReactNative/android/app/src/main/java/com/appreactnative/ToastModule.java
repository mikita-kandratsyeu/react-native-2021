package com.appreactnative;

import android.view.Gravity;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.HashMap;
import java.util.Map;

public class ToastModule extends ReactContextBaseJavaModule {
    public static final String LENGTH_SHORT = "LENGTH_SHORT";
    public static final String LENGTH_LONG = "LENGTH_LONG";

    public ToastModule(ReactApplicationContext context) {
        super(context);
    }

    @NonNull
    @Override
    public String getName() {
        return "ToastModule";
    }

    @Nullable
    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();

        constants.put(LENGTH_SHORT, Toast.LENGTH_SHORT);
        constants.put(LENGTH_LONG, Toast.LENGTH_LONG);

        return constants;
    }

    @ReactMethod
    public void showText(String message, int duration) {
        LayoutInflater inflater = getCurrentActivity().getLayoutInflater();

        View layout = inflater.inflate(R.layout.custom_toast,
                (ViewGroup) getCurrentActivity().findViewById(R.id.custom_toast_container));

        TextView text = (TextView) layout.findViewById(R.id.custom_toast_text);
        text.setText(message);

        Toast toast = new Toast(getReactApplicationContext());

        toast.setGravity(Gravity.CENTER, 0, 0);
        toast.setDuration(duration);
        toast.setView(layout);
        toast.show();
    }
}
