import { Dispatch, SetStateAction } from 'react';
import { ICategory } from '../../../../../interfaces';

export interface IProductCategoryProps {
  productCategory: ICategory;
  setActiveCategory: Dispatch<SetStateAction<ICategory>>;
}
