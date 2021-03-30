export const apiHost: string = 'http://35.231.209.61/';

export const nameOfStore: string = 'Ecommerce Store';
export const errorLoginTitle: string = 'Oops! Try Again!';
export const defaultLoginTitle: string = 'Login';
export const errorInternetConnection: string =
  'Oops! You may have lost your internet connection!';

export const maxLengthTitleProductList: number = 15;
export const maxLengthCategoryTitle: number = 9;

export enum StackRouters {
  login = 'Login',
  registration = 'Registration',
  main = 'Main',
  productDetails = 'ProductDetails',
  mockComponent = 'MockComponent',
}

export enum DrawerRouters {
  profile = 'Profile',
  wishList = 'WishList',
  cart = 'Cart',
  orders = 'Orders',
}

export const unnecessarySymbols: string[] = [
  '<p>',
  '</p>',
  '&lt;p&gt;',
  '&lt;/p&gt;',
  '&amp;',
  '$',
  '<li>',
  '</li>',
  '&nbsp;',
  '<br/>',
  '<br>',
  '<ul>',
  '</ul>',
];

export enum LoadingIndicatorAnimation {
  duration = 150,
  delay = 100,
  startTranslateY = 0,
  endTranslateY = -10,
}
