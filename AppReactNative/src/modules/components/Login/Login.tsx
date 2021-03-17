import React, { useState } from 'react';
import { KeyboardAvoidingView, Text, TextInput, TouchableHighlight, Alert } from 'react-native';

import { useDispatch } from 'react-redux';
import { defaultStyles } from '../../../constans';
import styles from './LoginStyles';
import { authentication, setUserData } from '../../../actions';

export const Login: React.FC = () => {
  const dispatch = useDispatch();

  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const changeLoginHandler = (value: string): void => {
    setLogin(value);
  };

  const changePasswordHandler = (value: string): void => {
    setPassword(value);
  };

  const submitHandler = (): void => {
    authentication(login, password).then(res => {
      if (res) {
        // TODO: Need testing
        dispatch(setUserData(login, res.token));

        Alert.alert('Success', `Your token: ${res.token}`);
      } else {
        Alert.alert('Error', 'Something went wrong! Try again!');
      }
    });
  };

  return (
    <KeyboardAvoidingView behavior="position" style={styles.container}>
      <Text style={styles.title}>Ecommerce Store</Text>
      <TextInput
        value={login}
        onChangeText={(text: string) => changeLoginHandler(text)}
        style={styles.input}
        placeholder="Login"
        placeholderTextColor={defaultStyles.colors.grey}
        autoCompleteType="email"
        blurOnSubmit
        keyboardType="email-address"
        textContentType="emailAddress"
      />
      <TextInput
        value={password}
        onChangeText={(text: string) => changePasswordHandler(text)}
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={defaultStyles.colors.grey}
        autoCompleteType="password"
        blurOnSubmit
        secureTextEntry
        textContentType="password"
      />
      <TouchableHighlight style={styles.restoreButton}>
        <Text style={styles.link}>Forgot password?</Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.loginButton} onPress={submitHandler}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.registrationButton}>
        <Text style={styles.link}>New here? Registration</Text>
      </TouchableHighlight>
    </KeyboardAvoidingView>
  );
};
