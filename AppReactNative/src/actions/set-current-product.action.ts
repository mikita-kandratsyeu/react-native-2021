import axios from 'axios';
import { createAction } from 'redux-actions';
import { apiHost } from '../constans';
import { IProduct } from '../modules/interfaces';
import { removeUnnecessarySymbols } from '../services';
import { initialStateCurrentProduct } from '../reducers';

export const setCurrentProductAction = createAction(
  'SET_CURRENT_PRODUCT_ACTION',
);

export const getCurrentProduct = (productId: string) =>
  axios
    .get(`${apiHost}index.php?rt=a/product/product&product_id=${productId}`)
    .then(res => {
      const { data } = res;

      const product: IProduct = {
        id: data.product_id,
        name: removeUnnecessarySymbols(data.name),
        price: removeUnnecessarySymbols(data.price),
        description: removeUnnecessarySymbols(data.description),
        source: {
          uri: `http:${data.thumbnail}`,
        },
        stockStatus: data.stock_status,
      };

      return Promise.resolve(product);
    })
    .catch(err => {
      console.error(err);

      return Promise.resolve(initialStateCurrentProduct);
    });
