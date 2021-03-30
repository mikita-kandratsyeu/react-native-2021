import React, { useEffect, useState } from 'react';
import { Alert, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { Header, LoadingIndicator, Separator } from '..';
import { defaultStyles, spinner } from '../../../constans';
import { getCategoriesSelector } from '../../../selectors';
import { ProductCategory, ProductList } from './components';
import {
  getCategories,
  getProducts,
  setCategoriesAction,
  setProductsAction,
} from '../../../actions';
import { ICategory } from '../../interfaces';
import styles from './MainStyles';

export const Main: React.FC = () => {
  const dispatch = useDispatch();

  const categoriesData = useSelector(getCategoriesSelector);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoadingProductList, setIsLoadingProductList] = useState<boolean>(
    false,
  );
  const [activeCategory, setActiveCategory] = useState<ICategory>({
    id: '',
    name: '',
  });

  useEffect(() => {
    setIsLoading(true);

    getCategories().then(categories => {
      if (categories) {
        dispatch(setCategoriesAction(categories));

        setActiveCategory({
          id: categories[0].id,
          name: categories[0].name,
        });

        setIsLoading(false);
      } else {
        Alert.alert('Error', 'Something went wrong!');

        setIsLoading(false);
      }
    });
  }, []);

  useEffect(() => {
    if (activeCategory.id) {
      setIsLoadingProductList(true);

      getProducts(activeCategory.id).then(products => {
        dispatch(setProductsAction(products));

        setIsLoadingProductList(false);
      });
    }
  }, [activeCategory.id]);

  return (
    <View style={styles.container}>
      <Header isSearchVisible isToggleButtonVisible />
      {isLoading ? (
        <View style={spinner}>
          <LoadingIndicator color={defaultStyles.colors.blue} />
        </View>
      ) : (
        <>
          <View style={styles.productCategoryScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.productCategory}>
                {categoriesData.map(category => (
                  <ProductCategory
                    key={category.id}
                    productCategory={category}
                    setActiveCategory={setActiveCategory}
                    isActive={activeCategory.id === category.id}
                  />
                ))}
              </View>
            </ScrollView>
          </View>
          <Separator />
          <ProductList
            categoryActive={activeCategory}
            isLoading={isLoadingProductList}
          />
        </>
      )}
    </View>
  );
};
