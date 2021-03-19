import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableHighlight,
  Alert,
  Button,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch } from 'react-redux';
import {
  defaultStyles,
  backgroundGradientColors,
  nameOfStore,
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
        <TouchableHighlight style={styles.restoreButton}>
          <Text style={styles.link}>Forgot password?</Text>
        </TouchableHighlight>
        <View style={styles.loginButton}>
          <Button
            title="Login"
            onPress={submitHandler}
            disabled={isButtonDisabled}
          />
        </View>
        <TouchableHighlight style={styles.registrationButton}>
          <Text style={styles.link}>New here? Registration</Text>
        </TouchableHighlight>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};
