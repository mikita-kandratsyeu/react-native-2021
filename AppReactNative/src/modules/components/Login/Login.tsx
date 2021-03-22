import React, { useState } from 'react';
import { KeyboardAvoidingView, Text, TextInput, Alert } from 'react-native';
import { RectButton, TouchableHighlight } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch } from 'react-redux';
import {
  defaultStyles,
  backgroundGradientColors,
  nameOfStore,
  opacityButton,
} from '../../../constans';
import { loginIntoSystem, setUserData } from '../../../actions';
import styles from './LoginStyles';

export const Login: React.FC = () => {
  const dispatch = useDispatch();

  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);

  const changeLoginHandler = (value: string): void => {
    setLogin(value);
  };

  const changePasswordHandler = (value: string): void => {
    setPassword(value);
  };

  const submitHandler = (): void => {
    setIsButtonDisabled(true);

    loginIntoSystem(login, password).then(res => {
      if (res) {
        dispatch(setUserData(login, res.token));

        Alert.alert('Success', `Your token: ${res.token}`);
      } else {
        Alert.alert('Error', 'Something went wrong! Try again!');
      }

      setIsButtonDisabled(false);
    });
  };

  return (
    <LinearGradient colors={backgroundGradientColors} style={styles.container}>
      <KeyboardAvoidingView behavior="position" style={styles.container}>
        <Text style={styles.title}>{nameOfStore}</Text>
        <TextInput
          value={login}
          onChangeText={(text: string) => changeLoginHandler(text)}
          style={styles.input}
          placeholder="Email Address"
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
          secureTextEntry
          textContentType="password"
        />
        <TouchableHighlight
          style={styles.restoreButton}
          underlayColor={defaultStyles.colors.pressText}>
          <Text style={styles.link}>Forgot password?</Text>
        </TouchableHighlight>
        <RectButton
          style={[styles.loginButton, isButtonDisabled && opacityButton]}
          onPress={submitHandler}>
          <Text style={styles.loginButtonText}>Login</Text>
        </RectButton>
        <TouchableHighlight
          style={styles.registrationButton}
          underlayColor={defaultStyles.colors.pressText}>
          <Text style={styles.link}>New here? Registration</Text>
        </TouchableHighlight>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};
