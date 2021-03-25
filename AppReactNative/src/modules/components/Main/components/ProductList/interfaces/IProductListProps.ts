import { ICategory } from '../../../../../interfaces';

export interface IProductListProps {
  categoryActive: ICategory;
  isLoading?: boolean;
}
