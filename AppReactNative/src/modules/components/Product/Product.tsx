import React from 'react';
import { Image, Text, View } from 'react-native';
import { IProductProps } from './interfaces';
import styles from './ProductStyles';

export const Product: React.FC<IProductProps> = ({ product }) => (
  <View style={styles.container}>
    <View style={styles.imageWrapper}>
      <Image source={product.images[0].source} style={styles.image} />
    </View>
    <Text style={styles.title}>{product.name}</Text>
    <View style={styles.priceWrapper}>
      <Text style={styles.price}>{product.price}</Text>
      <Text style={styles.oldPrice}>{product.oldPrice}</Text>
      <Text style={styles.discount}>{`${product.discount}% Off`}</Text>
    </View>
  </View>
);
