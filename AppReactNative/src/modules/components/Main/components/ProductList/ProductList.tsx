import React, { useEffect, useState } from 'react';
import { RefreshControl, SafeAreaView, Text, View } from 'react-native';
import { FlatList, TouchableHighlight } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { IProductListProps } from './interfaces';
import { IProduct } from '../../../../interfaces';
import { defaultStyles, spinner } from '../../../../../constans';
import { Product } from '../../../Product';
import { getProductsSelector } from '../../../../../selectors';
import { getProducts, setProductsAction } from '../../../../../actions';
import { LoadingIndicator } from '../../../UI';
import styles, { marginLeftCalc } from './ProductListStyles';

export const ProductList: React.FC<IProductListProps> = ({
  categoryActive,
  isLoading,
}) => {
  const dispatch = useDispatch();

  const productsData = useSelector(getProductsSelector);

  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);
  const [currentRow, setCurrentRow] = useState<number>(6);

  const refreshingHandler = (): void => {
    setIsRefreshing(true);
    setCurrentRow(6);

    getProducts(categoryActive.id).then(products => {
      dispatch(setProductsAction(products));

      setIsRefreshing(false);
    });
  };

  const loadMoreHandler = (): void => {
    if (currentRow <= Number(productsData[0].records)) {
      setIsLoadingMore(true);
      setCurrentRow(row => row + 2);

      getProducts(categoryActive.id, currentRow).then(products => {
        dispatch(setProductsAction(products));

        setIsLoadingMore(false);
      });
    }
  };

  useEffect(() => {
    setCurrentRow(6);
  }, [categoryActive.id]);

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
      {isLoading ? (
        <View style={spinner}>
          <LoadingIndicator color={defaultStyles.colors.blue} />
        </View>
      ) : (
        <SafeAreaView style={styles.productListContainer}>
          <FlatList
            keyExtractor={(item: IProduct) => item.id}
            data={productsData}
            numColumns={2}
            renderItem={({
              item,
              index,
            }: {
              item: IProduct;
              index: number;
            }) => (
              <View style={[styles.productContainer, marginLeftCalc(index)]}>
                <Product product={item} />
              </View>
            )}
            refreshControl={
              <RefreshControl
                enabled
                refreshing={isRefreshing}
                onRefresh={refreshingHandler}
              />
            }
            onEndReached={loadMoreHandler}
            onEndReachedThreshold={0}
            ListFooterComponent={
              isLoadingMore ? (
                <View style={spinner}>
                  <LoadingIndicator color={defaultStyles.colors.blue} />
                </View>
              ) : null
            }
          />
        </SafeAreaView>
      )}
    </View>
  );
};
