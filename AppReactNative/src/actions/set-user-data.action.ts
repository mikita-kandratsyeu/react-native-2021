import { createAction } from 'redux-actions';
import { Dispatch } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const setUserDataAction = createAction('SET_USER_DATA_ACTION');

export const setUserData = (username: string, token: string) => (
  dispatch: Dispatch,
) => {
  const storeUserData = async () => {
    try {
      return await AsyncStorage.setItem('userToken', token);
    } catch (err) {
      console.error(err);

      return null;
    }
  };

  storeUserData().then(() => {
    dispatch(setUserDataAction({ username, token }));
  });
};
