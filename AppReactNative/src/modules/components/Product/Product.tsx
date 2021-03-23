import React from 'react';
import { Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { IProductProps } from './interfaces';
import styles, { extendStyles } from './ProductStyles';

export const Product: React.FC<IProductProps> = ({ product, isExtend }) => {
  const style = isExtend ? extendStyles : styles;

  const navigator = useNavigation();

  return (
    <TouchableOpacity
      style={style.container}
      onPress={() =>
        isExtend
          ? null
          : navigator.navigate('ProductDetails', {
              product,
            })
      }>
      <View style={style.imageWrapper}>
        <Image source={product.images[0].source} style={style.image} />
      </View>
      {isExtend && (
        <View style={extendStyles.inStockWrapper}>
          <Text style={extendStyles.inStock}>In Stock</Text>
        </View>
      )}
      <Text style={style.title}>{product.name}</Text>
      <View style={style.priceWrapper}>
        <Text style={style.price}>{product.price}</Text>
        <Text style={style.oldPrice}>{product.oldPrice}</Text>
        <Text style={style.discount}>{`${product.discount}% Off`}</Text>
      </View>
    </TouchableOpacity>
  );
};
