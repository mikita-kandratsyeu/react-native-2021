import { IUserState } from '../modules/interfaces';

export const getUserDataSelector = (state: IUserState) => state.user;
