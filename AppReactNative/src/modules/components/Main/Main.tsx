import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { Header, Separator } from '..';
import { nameOfStore } from '../../../constans';
import { setProducts } from '../../../actions';
import { products } from '../../../mock';
import { getProductsSelector } from '../../../selectors';
import { ProductCategory, ProductList } from './components';
import styles from './MainStyles';

export const Main: React.FC = () => {
  const dispatch = useDispatch();

  const productsData = useSelector(getProductsSelector);

  useEffect(() => {
    dispatch(setProducts(products));
  }, [dispatch]);

  const renderProductCategory = (): React.ReactNode =>
    productsData.length ? (
      productsData.map(category => (
        <ProductCategory key={category.id} productCategory={category} />
      ))
    ) : (
      <View>
        <Text>Loading...</Text>
      </View>
    );

  return (
    <View style={styles.container}>
      <Header title={nameOfStore} isSearchVisible isToggleButtonVisible />
      <View style={styles.productCategoryScroll}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.productCategory}>{renderProductCategory()}</View>
        </ScrollView>
      </View>
      <Separator />
      <View style={styles.productList}>
        <ScrollView>
          {productsData.length ? (
            <>
              <ProductList currentCategory={productsData[0]} />
            </>
          ) : (
            <View>
              <Text>Loading...</Text>
            </View>
          )}
        </ScrollView>
      </View>
    </View>
  );
};
