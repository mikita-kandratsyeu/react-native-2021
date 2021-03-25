import React from 'react';
import { Image, Text, View } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { IProductCategoryProps } from './interfaces';
import { defaultStyles } from '../../../../../constans';
import { productsMock } from '../../../../../mock';
import styles from './ProductCategoryStyles';

export const ProductCategory: React.FC<IProductCategoryProps> = ({
  productCategory,
  setActiveCategory,
}) => {
  const categoryIcon = productCategory.source || productsMock[0].source;

  return (
    <TouchableHighlight
      style={styles.wrapper}
      underlayColor={defaultStyles.colors.pressLink}
      onPress={() =>
        setActiveCategory({
          id: productCategory.id,
          name: productCategory.name,
        })
      }>
      <View style={styles.container}>
        <View style={styles.imageWrapper}>
          <Image source={categoryIcon} style={styles.image} />
        </View>
        <Text style={styles.title}>{productCategory.name}</Text>
      </View>
    </TouchableHighlight>
  );
};
