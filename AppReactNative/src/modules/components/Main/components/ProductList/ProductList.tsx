import React from 'react';
import { Text, View } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { IProductListProps } from './interfaces';
import { defaultStyles } from '../../../../../constans';
import styles from './ProductListStyles';
import { Product } from '../../../Product';

export const ProductList: React.FC<IProductListProps> = ({
  currentCategory,
}) => (
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
    <View style={styles.productContainer}>
      {currentCategory.items?.length ? (
        currentCategory.items.map(item => (
          <Product key={item.id} product={item} />
        ))
      ) : (
        <Text>There are no products in this category</Text>
      )}
    </View>
  </View>
);
