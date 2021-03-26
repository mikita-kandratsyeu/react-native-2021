import { ICounterState } from '../modules/interfaces';

export const getValueSelector = (state: ICounterState) => state.counter.value;
