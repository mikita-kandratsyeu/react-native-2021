export type StackParamsList = {
  productDetails: {
    product: IProduct;
  };
};

export interface ICounter {
  value: number;
}

export interface IUser {
  username: string;
  token: string;
}

export interface IProductImage {
  id: string;
  source: any;
}

export interface IProductColor {
  id: string;
  name: string;
}

export interface IProduct {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  discount?: number;
  images: IProductImage[];
  colors: IProductColor[];
  description: string;
}

export interface ICategory {
  id: string;
  name: string;
  source: any;
  items?: IProduct[];
}

export interface ICounterState {
  counter: ICounter;
}

export interface IUserState {
  user: IUser;
}

export interface IProductsMockState {
  productsMock: ICategory[];
}

// TODO: Implement getting data from API
export interface ICategoryApi {
  id: string;
  name: string;
  imageUrl: string;
}

export interface ICategoriesApiState {
  categoriesApi: ICategoryApi[];
}
