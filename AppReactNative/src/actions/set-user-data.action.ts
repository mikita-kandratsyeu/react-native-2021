import { createAction } from 'redux-actions';
import { Dispatch } from 'redux';
import * as Keychain from 'react-native-keychain';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { userToken } from '../constans';

export const setUserDataAction = createAction('SET_USER_DATA_ACTION');

export const setUserData = (
  username: string,
  password: string,
  token: string,
) => async (dispatch: Dispatch) => {
  try {
    if (username && password) {
      await Keychain.setGenericPassword(username, password);
    }

    await AsyncStorage.setItem(userToken, token);

    dispatch(setUserDataAction({ username, token }));
  } catch (err) {
    console.error(err);
  }
};
