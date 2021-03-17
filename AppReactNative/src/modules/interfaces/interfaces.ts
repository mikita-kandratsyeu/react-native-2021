export interface ICounter {
  value: number;
}

export interface IUser {
  username: string;
  token: string;
}

export interface ICounterState {
  counter: ICounter;
}

export interface IUserState {
  user: IUser;
}
