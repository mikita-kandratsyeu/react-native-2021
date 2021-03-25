import React from 'react';
import { Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { IProductProps } from './interfaces';
import { getTruncatedString } from '../../../services';
import { maxLengthTitleProductList } from '../../../constans';
import styles, { extendStyles } from './ProductStyles';

export const Product: React.FC<IProductProps> = ({ product, isExtend }) => {
  const style = isExtend ? extendStyles : styles;

  const navigator = useNavigation();

  return (
    <TouchableOpacity
      disabled={isExtend}
      style={style.container}
      onPress={() =>
        isExtend
          ? null
          : navigator.navigate('ProductDetails', {
              productId: product.id,
            })
      }>
      <View style={style.imageWrapper}>
        <Image source={product.source} style={style.image} />
      </View>
      {isExtend && (
        <View style={extendStyles.inStockWrapper}>
          <Text style={extendStyles.inStock}>
            {product.stockStatus || 'In Stock'}
          </Text>
        </View>
      )}
      <Text style={style.title}>
        {isExtend
          ? product.name
          : getTruncatedString(product.name, maxLengthTitleProductList)}
      </Text>
      <View style={style.priceWrapper}>
        <Text style={style.price}>{`$${product.price}`}</Text>
      </View>
    </TouchableOpacity>
  );
};
