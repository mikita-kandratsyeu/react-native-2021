import React, { useState } from 'react';
import { RefreshControl, Text, View } from 'react-native';
import { FlatList, TouchableHighlight } from 'react-native-gesture-handler';
import { IProductListProps } from './interfaces';
import { IProduct } from '../../../../interfaces';
import { defaultStyles } from '../../../../../constans';
import styles from './ProductListStyles';
import { Product } from '../../../Product';

export const ProductList: React.FC<IProductListProps> = ({
  currentCategory,
}) => {
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const refreshingHandler = (): void => {
    // TODO: add refreshing data from API
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
      {currentCategory.items?.length ? (
        <FlatList
          columnWrapperStyle={styles.productContainer}
          keyExtractor={(item: IProduct) => item.id}
          data={currentCategory.items}
          numColumns={2}
          renderItem={({ item }: { item: IProduct }) => (
            <Product product={item} />
          )}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={refreshingHandler}
            />
          }
        />
      ) : (
        <Text>There are no products in this category</Text>
      )}
    </View>
  );
};
