import React from 'react';
import { Image, Text, TouchableHighlight, View } from 'react-native';
import { IProductCategoryProps } from './interfaces';
import styles from './ProductCategoryStyles';

export const ProductCategory: React.FC<IProductCategoryProps> = ({
  productCategory,
}) => (
  <TouchableHighlight>
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image source={productCategory.source} style={styles.image} />
      </View>
      <Text style={styles.title}>{productCategory.name}</Text>
    </View>
  </TouchableHighlight>
);
