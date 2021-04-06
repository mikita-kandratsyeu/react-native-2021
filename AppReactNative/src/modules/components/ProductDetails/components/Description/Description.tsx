import React from 'react';
import { Text, View, NativeModules, Platform } from 'react-native';
import {
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import PushNotification from 'react-native-push-notification';
import { useDispatch, useSelector } from 'react-redux';
import { IDescriptionProps } from './interfaces';
import { channelIdCart, defaultStyles } from '../../../../../constans';
import styles from './DescriptionStyles';
import { setShoppingCart } from '../../../../../actions';
import { getShoppingCartSelector } from '../../../../../selectors';

const { ToastModule } = NativeModules;

export const Description: React.FC<IDescriptionProps> = ({ product }) => {
  const dispatch = useDispatch();

  const shoppingCart = useSelector(getShoppingCartSelector);

  const addToCartHandler = (): void => {
    dispatch(setShoppingCart(product));

    const amount: number =
      shoppingCart.find(cartItem => cartItem?.productId === product.id)
        ?.amount || 1;

    if (Platform.OS === 'android') {
      ToastModule.showText(
        'Product added to your cart',
        ToastModule.LENGTH_SHORT,
      );

      PushNotification.localNotification({
        channelId: channelIdCart,
        title: product.name,
        message: `Amount: ${amount}`,
        largeIconUrl: product.source.uri,
      });
    }
  };

  return (
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
          <TouchableOpacity onPress={addToCartHandler}>
            <View style={styles.addToCart}>
              <Text style={styles.addToCartText}>Add to Cart</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
