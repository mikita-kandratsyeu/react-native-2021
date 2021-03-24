import React, { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { Header, Separator } from '..';
import { defaultStyles } from '../../../constans';
import { getProductsSelector } from '../../../selectors';
import { ProductCategory, ProductList } from './components';

import styles from './MainStyles';

export const Main: React.FC = () => {
  const productsData = useSelector(getProductsSelector);

  useEffect(() => {}, []);

  const renderProductCategory = (): React.ReactNode =>
    productsData.length ? (
      productsData.map(category => (
        <ProductCategory key={category.id} productCategory={category} />
      ))
    ) : (
      <ActivityIndicator color={defaultStyles.colors.blue} />
    );

  return (
    <View style={styles.container}>
      <Header isSearchVisible isToggleButtonVisible />
      <View style={styles.productCategoryScroll}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.productCategory}>{renderProductCategory()}</View>
        </ScrollView>
      </View>
      <Separator />
      {productsData.length ? (
        <ProductList currentCategory={productsData[0]} />
      ) : (
        <ActivityIndicator />
      )}
    </View>
  );
};
