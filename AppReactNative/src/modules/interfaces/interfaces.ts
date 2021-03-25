export interface ICounter {
  value: number;
}

export interface IUser {
  username: string;
  token: string;
}

// Interfaces for mock data
export interface IProductMockImage {
  id: string;
  source: any;
}

export interface IProductMockColor {
  id: string;
  name: string;
}

export interface IProductMock {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  discount?: number;
  images: IProductMockImage[];
  colors: IProductMockColor[];
  description: string;
}

export interface ICategoryMock {
  id: string;
  name: string;
  source: any;
  items?: IProductMock[];
}

export interface ICounterState {
  counter: ICounter;
}

export interface IUserState {
  user: IUser;
}

export interface IProductsMockState {
  productsMock: ICategoryMock[];
}

// Interfaces for data from API
export interface ICategory {
  id: string;
  name: string;
  source?: {
    uri: string;
  };
}

export interface ICategoriesState {
  categories: ICategory[];
}

export interface IProductOptions {
  id: string;
  name: string;
}

export interface IProduct {
  id: string;
  name: string;
  price: number | string;
  currency?: string;
  description?: string;
  source: {
    uri: string;
  };
  stockStatus?: string;
  options?: IProductOptions[];
}

export interface IProductsState {
  products: IProduct[];
}

export interface ICurrentProductState {
  currentProduct: IProduct;
}
