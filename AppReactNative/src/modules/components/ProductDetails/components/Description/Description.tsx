import React from 'react';
import { Text, View, NativeModules, Platform } from 'react-native';
import {
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import PushNotification from 'react-native-push-notification';
import { IDescriptionProps } from './interfaces';
import { channelIdCart, defaultStyles } from '../../../../../constans';
import styles from './DescriptionStyles';

const { ToastModule } = NativeModules;

export const Description: React.FC<IDescriptionProps> = ({ product }) => (
  <View style={styles.container}>
    <Text style={styles.header}>Description: </Text>
    <Text style={styles.description}>{product.description}</Text>
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
        <TouchableOpacity
          onPress={() => {
            if (Platform.OS === 'android') {
              ToastModule.showText(
                'Product added to your cart',
                ToastModule.LENGTH_SHORT,
              );

              PushNotification.localNotification({
                channelId: channelIdCart,
                title: product.name,
                message: 'Your product was added to cart',
                largeIconUrl: product.source.uri,
              });
            }
          }}>
          <View style={styles.addToCart}>
            <Text style={styles.addToCartText}>Add to Cart</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);
