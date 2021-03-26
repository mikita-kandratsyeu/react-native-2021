import axios from 'axios';
import { createAction } from 'redux-actions';
import { apiHost } from '../constans';
import { ICategory } from '../modules/interfaces';
import { removeUnnecessarySymbols } from '../services';

export const setCategoriesAction = createAction('SET_CATEGORIES_ACTION');

export const getCategories = () =>
  axios
    .get(`${apiHost}index.php?rt=a/product/category&category_id=0}`)
    .then(res => {
      const { data } = res;

      const categories: ICategory[] = data.subcategories.map(
        (category: any) => ({
          id: category.category_id,
          name: removeUnnecessarySymbols(category.name),
          source: {
            uri: `http:${category.thumb}`,
          },
        }),
      );

      return Promise.resolve(categories);
    })
    .catch(err => {
      console.error(err);

      return Promise.resolve([]);
    });
