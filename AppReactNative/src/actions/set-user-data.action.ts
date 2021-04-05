import { createAction } from 'redux-actions';
import { Dispatch } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform, NativeModules } from 'react-native';
import { userToken } from '../constans';

const { StorageModule } = NativeModules;

export const setUserDataAction = createAction('SET_USER_DATA_ACTION');

export const setUserData = (username: string, token: string) => (
  dispatch: Dispatch,
) => {
  if (Platform.OS === 'ios') {
    const storeUserData = async () => {
      try {
        return await AsyncStorage.setItem(userToken, token);
      } catch (err) {
        console.error(err);

        return null;
      }
    };

    storeUserData().then(() => {
      dispatch(setUserDataAction({ username, token }));
    });
  } else {
    StorageModule.insertItem(userToken, token, (err: any) => {
      if (err) {
        console.info(err);
      }

      dispatch(setUserDataAction({ username, token }));
    });
  }
};
