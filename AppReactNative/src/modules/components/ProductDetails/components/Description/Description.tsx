import React from 'react';
import { Text, View } from 'react-native';
import {
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import { IDescriptionProps } from './interfaces';
import { defaultStyles } from '../../../../../constans';
import styles from './DescriptionStyles';

export const Description: React.FC<IDescriptionProps> = ({ description }) => (
  <View style={styles.container}>
    <Text style={styles.header}>Description: </Text>
    <Text style={styles.description}>{description}</Text>
    <View style={styles.controlsContainer}>
      <View style={styles.wishListWrapper}>
        <TouchableHighlight
          underlayColor={defaultStyles.colors.pressLink}
          onPress={() => null}>
          <View style={styles.wishList}>
            <Icon
              name="hearto"
              style={styles.wishListIcon}
              size={defaultStyles.fontSize.medium}
              color={defaultStyles.colors.blue}
            />
            <Text style={styles.wishListText}>Wish List</Text>
          </View>
        </TouchableHighlight>
      </View>
      <View style={styles.addToCartWrapper}>
        <TouchableOpacity onPress={() => null}>
          <View style={styles.addToCart}>
            <Text style={styles.addToCartText}>Add to Cart</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);
