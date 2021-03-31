import { IOrdersState } from '../modules/interfaces';

export const getOrdersSelector = (state: IOrdersState) => state.orders;
