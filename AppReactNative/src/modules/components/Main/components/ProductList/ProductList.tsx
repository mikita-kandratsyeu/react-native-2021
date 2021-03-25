import React, { useState } from 'react';
import {
  ActivityIndicator,
  RefreshControl,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import { FlatList, TouchableHighlight } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { IProductListProps } from './interfaces';
import { IProduct } from '../../../../interfaces';
import { defaultStyles } from '../../../../../constans';
import { Product } from '../../../Product';
import { getProductsSelector } from '../../../../../selectors';
import { getProducts, setProductsAction } from '../../../../../actions';
import styles from './ProductListStyles';

export const ProductList: React.FC<IProductListProps> = ({
  categoryActive,
  isLoading,
}) => {
  const dispatch = useDispatch();

  const productsData = useSelector(getProductsSelector);

  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  const refreshingHandler = (): void => {
    setIsRefreshing(true);

    getProducts(categoryActive.id).then(products => {
      dispatch(setProductsAction(products));

      setIsRefreshing(false);
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.productListHeader}>
        <Text style={styles.productListTitle}>{categoryActive.name}</Text>
        <TouchableHighlight
          style={styles.viewAllButton}
          underlayColor={defaultStyles.colors.pressLink}
          onPress={() => null}>
          <Text style={styles.viewAllButtonText}>View all</Text>
        </TouchableHighlight>
      </View>
      {!isLoading ? (
        <SafeAreaView style={styles.productListContainer}>
          <FlatList
            columnWrapperStyle={styles.productColumnWrapper}
            keyExtractor={(item: IProduct) => item.id}
            data={productsData}
            numColumns={2}
            renderItem={({ item }: { item: IProduct }) => (
              <Product product={item} />
            )}
            refreshControl={
              <RefreshControl
                enabled
                refreshing={isRefreshing}
                onRefresh={refreshingHandler}
              />
            }
          />
        </SafeAreaView>
      ) : (
        <View style={styles.spinner}>
          <ActivityIndicator color={defaultStyles.colors.blue} size="large" />
        </View>
      )}
    </View>
  );
};
