import React from 'react';
import { Text, View } from 'react-native';
import {
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
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
          underlayColor={defaultStyles.colors.blue}
          activeOpacity={0.5}
          onPress={() => {}}>
          <View style={styles.wishList}>
            <FontAwesomeIcon
              style={styles.wishListIcon}
              icon={faHeart}
              size={defaultStyles.fontSize.medium}
              color={defaultStyles.colors.blue}
            />
            <Text style={styles.wishListText}>Wish List</Text>
          </View>
        </TouchableHighlight>
      </View>
      <View style={styles.addToCartWrapper}>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.addToCart}>
            <Text style={styles.addToCartText}>Add to Cart</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);
