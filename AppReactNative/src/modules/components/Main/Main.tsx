import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { Header, Separator } from '..';
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
    setIsLoadingProductList(true);

    if (activeCategory.id) {
      getProducts(activeCategory.id).then(products => {
        dispatch(setProductsAction(products));

        setIsLoadingProductList(false);
      });
    }
  }, [activeCategory.id]);

  const renderProductCategory = (categories: ICategory[]): React.ReactNode =>
    categories.map(category => (
      <ProductCategory
        key={category.id}
        productCategory={category}
        setActiveCategory={setActiveCategory}
      />
    ));

  return (
    <View style={styles.container}>
      <Header isSearchVisible isToggleButtonVisible />
      {!isLoading ? (
        <>
          <View style={styles.productCategoryScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.productCategory}>
                {renderProductCategory(categoriesData)}
              </View>
            </ScrollView>
          </View>
          <Separator />
          <ProductList
            categoryActive={activeCategory}
            isLoading={isLoadingProductList}
          />
        </>
      ) : (
        <View style={spinner}>
          <ActivityIndicator color={defaultStyles.colors.blue} size="large" />
        </View>
      )}
    </View>
  );
};
