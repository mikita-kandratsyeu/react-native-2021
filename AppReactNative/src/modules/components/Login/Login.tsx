import React, { useState } from 'react';
import { KeyboardAvoidingView, Text, TextInput } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch } from 'react-redux';
import { LoadingButton, ModalWindow } from '..';
import {
  defaultStyles,
  backgroundGradientColors,
  nameOfStore,
  StackRouters,
  defaultLoginTitle,
  errorLoginTitle,
} from '../../../constans';
import { loginIntoSystem, setProducts, setUserData } from '../../../actions';
import { productsMock } from '../../../mock';
import styles from './LoginStyles';

export const Login: React.FC = () => {
  const navigator = useNavigation();
  const dispatch = useDispatch();

  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const changeLoginHandler = (value: string): void => {
    setLogin(value);
  };

  const changePasswordHandler = (value: string): void => {
    setPassword(value);
  };

  const submitHandler = (): void => {
    setIsLoading(true);

    loginIntoSystem(login, password).then(res => {
      if (res) {
        dispatch(setUserData(login, res.token));
        dispatch(setProducts(productsMock));

        setIsModalVisible(true);
        setIsError(false);
      } else {
        setIsError(true);
      }

      setIsLoading(false);
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
          style={styles.registrationButton}
          underlayColor={defaultStyles.colors.pressLink}
          onPress={() => navigator.navigate(StackRouters.registration)}>
          <Text style={styles.link}>New here? Registration</Text>
        </TouchableHighlight>
        <LoadingButton
          isLoading={isLoading}
          onPress={submitHandler}
          isError={isError}
          defaultTitle={defaultLoginTitle}
          errorTitle={errorLoginTitle}
        />
      </KeyboardAvoidingView>
      <ModalWindow
        modalType="success"
        description={`Welcome to ${nameOfStore}!`}
        buttonTitle="Close"
        isVisible={isModalVisible}
        setIsVisible={setIsModalVisible}
        isCustomButtonVisible
      />
    </LinearGradient>
  );
};
