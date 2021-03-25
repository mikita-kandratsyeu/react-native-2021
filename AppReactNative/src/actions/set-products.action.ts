import axios from 'axios';
import { createAction } from 'redux-actions';
import { apiHost } from '../constans';
import { IProduct } from '../modules/interfaces';
import { removeUnnecessarySymbols } from '../services';

export const setProductsAction = createAction('SET_PRODUCTS_ACTION');

export const getProducts = (categoryId: string, rows: number = 4) =>
  axios
    .get(
      `${apiHost}index.php?rt=a/product/filter&category_id=${categoryId}&rows=${rows}`,
    )
    .then(res => {
      const { data } = res;

      const products: IProduct[] = data.rows.map((product: any) => ({
        id: product.id,
        name: removeUnnecessarySymbols(product.cell.name),
        price: product.cell.price.toFixed(2),
        currency: product.cell.currency_code,
        source: {
          uri: `http:${product.cell.thumb}`,
        },
      }));

      return Promise.resolve(products);
    })
    .catch(err => console.error(err));
