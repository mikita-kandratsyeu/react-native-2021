import React from 'react';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, Image } from 'react-native';
import { FlatList, TouchableHighlight } from 'react-native-gesture-handler';
import { StackParamsList } from '../../types';
import {
  defaultStyles,
  maxLengthTitleProductList,
  StackRouters,
} from '../../../constans';
import { IProduct } from '../../interfaces';
import { getTruncatedString } from '../../../services';
import { Header } from '../Header';
import { Separator } from '../UI';
import styles from './OrderDetailsStyles';

export const OrderDetails: React.FC = () => {
  const navigator = useNavigation();
  const route = useRoute<
    RouteProp<StackParamsList, StackRouters.orderDetails>
  >();

  const { order } = route.params;

  console.log(order);
  return (
    <>
      <Header />
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.textWrapper}>
            <Text style={styles.itemTitle}>Order Id:</Text>
            <Text style={styles.itemDescription}>{order.id}</Text>
          </View>
          <View style={styles.textWrapper}>
            <Text style={styles.itemTitle}>Order Date:</Text>
            <Text style={styles.itemDescription}>{order.date}</Text>
          </View>
          <View style={styles.textWrapper}>
            <Text style={styles.itemTitle}>Total Amount:</Text>
            <Text style={styles.itemDescription}>{order.totalAmount}$</Text>
          </View>
          <View style={styles.textWrapper}>
            <Text style={styles.itemTitle}>Payment mode:</Text>
            <Text style={styles.itemDescription}>{order.paymentMode}</Text>
          </View>
          <View style={styles.textWrapper}>
            <Text style={styles.itemTitle}>Shipping Address:</Text>
            <TouchableHighlight
              underlayColor={defaultStyles.colors.pressLink}
              onPress={() =>
                navigator.navigate(StackRouters.mapView, {
                  shippingAddress: order.shippingAddress,
                })
              }>
              <Text
                style={[
                  styles.itemDescription,
                  { fontSize: defaultStyles.fontSize.small },
                ]}>
                {order.shippingAddress.name}
              </Text>
            </TouchableHighlight>
          </View>
          <View style={styles.textWrapper}>
            <Text style={styles.itemTitle}>Status:</Text>
            <Text
              style={[
                styles.itemDescription,
                { color: defaultStyles.colors.green },
              ]}>
              {order.status}
            </Text>
          </View>
        </View>
        <Separator />
        <View style={styles.wrapper}>
          <Text style={styles.title}>Ordered Products:</Text>
          <FlatList
            data={order.products}
            keyExtractor={(item: IProduct) => item.id}
            renderItem={({ item }: { item: IProduct }) => (
              <View style={styles.productWrapper}>
                <View>
                  <Text style={styles.productTitle}>
                    {getTruncatedString(item.name, maxLengthTitleProductList)}
                  </Text>
                  <Text style={styles.productPrice}>Price: {item.price}$</Text>
                </View>
                <Image style={styles.image} source={item.source} />
              </View>
            )}
          />
        </View>
      </View>
    </>
  );
};
