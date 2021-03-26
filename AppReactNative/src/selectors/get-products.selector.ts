import { IProductsState } from '../modules/interfaces';

export const getProductsSelector = (state: IProductsState) => state.products;
