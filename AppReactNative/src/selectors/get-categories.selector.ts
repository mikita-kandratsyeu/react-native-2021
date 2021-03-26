import { ICategoriesState } from '../modules/interfaces';

export const getCategoriesSelector = (state: ICategoriesState) =>
  state.categories;
