import React, { useState } from 'react';
import { RefreshControl, SafeAreaView, Text, View } from 'react-native';
import { FlatList, TouchableHighlight } from 'react-native-gesture-handler';
import { IProductListProps } from './interfaces';
import { IProduct } from '../../../../interfaces';
import { defaultStyles } from '../../../../../constans';
import { Product } from '../../../Product';
import styles from './ProductListStyles';

export const ProductList: React.FC<IProductListProps> = ({
  currentCategory,
}) => {
  const [productsData, setProductsData] = useState(currentCategory.items || []);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  const refreshingHandler = (): void => {
    setIsRefreshing(true);

    setTimeout(() => {
      setIsRefreshing(false);
      setProductsData([]);
    }, 3000);
  };

  return (
    <View style={styles.container}>
      <View style={styles.productListHeader}>
        <Text style={styles.productListTitle}>{currentCategory.name}</Text>
        <TouchableHighlight
          style={styles.viewAllButton}
          underlayColor={defaultStyles.colors.grey}
          onPress={() => {}}>
          <Text style={styles.viewAllButtonText}>View all</Text>
        </TouchableHighlight>
      </View>
      {productsData.length ? (
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
        <Text>There are no products in this category</Text>
      )}
    </View>
  );
};
