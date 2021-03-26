import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { KeyboardAvoidingView, Text, TextInput } from 'react-native';
import { RectButton, TouchableHighlight } from 'react-native-gesture-handler';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import {
  backgroundGradientColors,
  defaultStyles,
  nameOfStore,
  StackRouters,
} from '../../../constans';
import styles from './RegistrationStyles';

export const Registration: React.FC = () => {
  const navigator = useNavigation();

  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const changeFullNameHandler = (value: string): void => {
    setFullName(value);
  };

  const changeEmailHandler = (value: string): void => {
    setEmail(value);
  };

  const changePasswordHandler = (value: string): void => {
    setPassword(value);
  };

  const changeConfirmPasswordHandler = (value: string): void => {
    setConfirmPassword(value);
  };

  // TODO: Functionality will be implement in the future tasks
  const submitHandler = (): void => {};

  return (
    <LinearGradient colors={backgroundGradientColors} style={styles.container}>
      <TouchableHighlight
        style={styles.iconArrowBack}
        underlayColor={defaultStyles.colors.pressLink}
        onPress={() => navigator.goBack()}>
        <FontAwesomeIcon
          icon={faArrowLeft}
          size={defaultStyles.fontSize.medium}
          color={defaultStyles.colors.black}
        />
      </TouchableHighlight>
      <KeyboardAvoidingView behavior="padding">
        <Text style={styles.title}>{nameOfStore}</Text>
        <TextInput
          value={fullName}
          onChangeText={changeFullNameHandler}
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor={defaultStyles.colors.grey}
          autoCompleteType="name"
          blurOnSubmit
          keyboardType="default"
          textContentType="name"
        />
        <TextInput
          value={email}
          onChangeText={changeEmailHandler}
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor={defaultStyles.colors.grey}
          autoCompleteType="email"
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <TextInput
          value={password}
          onChangeText={changePasswordHandler}
          style={styles.input}
          placeholder="Password"
          placeholderTextColor={defaultStyles.colors.grey}
          autoCompleteType="password"
          secureTextEntry
          textContentType="password"
        />
        <TextInput
          value={confirmPassword}
          onChangeText={changeConfirmPasswordHandler}
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor={defaultStyles.colors.grey}
          autoCompleteType="password"
          secureTextEntry
          textContentType="password"
        />
        <RectButton style={styles.registrationButton} onPress={submitHandler}>
          <Text style={styles.registrationButtonText}>Registration</Text>
        </RectButton>
        <TouchableHighlight
          style={styles.loginButton}
          underlayColor={defaultStyles.colors.pressLink}
          onPress={() => navigator.navigate(StackRouters.login)}>
          <Text style={styles.link}>Already have an account? Login</Text>
        </TouchableHighlight>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};
