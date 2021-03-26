import React from 'react';
import { Image, Text, View } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { IProductCategoryProps } from './interfaces';
import { defaultStyles, maxLengthCategoryTitle } from '../../../../../constans';
import { productsMock } from '../../../../../mock';
import { getTruncatedString } from '../../../../../services';
import styles from './ProductCategoryStyles';

export const ProductCategory: React.FC<IProductCategoryProps> = ({
  productCategory,
  setActiveCategory,
  isActive,
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
        <View
          style={[
            styles.imageWrapper,
            isActive && { borderColor: defaultStyles.colors.green },
          ]}>
          <Image source={categoryIcon} style={styles.image} />
        </View>
        <Text style={styles.title}>
          {getTruncatedString(productCategory.name, maxLengthCategoryTitle)}
        </Text>
      </View>
    </TouchableHighlight>
  );
};
