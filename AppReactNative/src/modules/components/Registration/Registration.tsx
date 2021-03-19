import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  Button,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import {
  backgroundGradientColors,
  defaultStyles,
  nameOfStore,
} from '../../../constans';
import styles from './RegistrationStyles';

export const Registration: React.FC = () => {
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
      <KeyboardAvoidingView behavior="position" style={styles.container}>
        <TouchableHighlight
          style={styles.iconArrowBack}
          underlayColor={defaultStyles.colors.grey}
          onPress={() => {}}>
          <FontAwesomeIcon
            icon={faArrowLeft}
            size={defaultStyles.fontSize.medium}
            color={defaultStyles.colors.black}
          />
        </TouchableHighlight>
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
        <View style={styles.loginButton}>
          <Button title="Registration" onPress={submitHandler} />
        </View>
        <TouchableHighlight style={styles.registrationButton}>
          <Text style={styles.link}>Already have an account? Login</Text>
        </TouchableHighlight>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};
