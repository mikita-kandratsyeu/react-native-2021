import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Header, LoadingIndicator } from '..';
import { Orders } from './components';
import { getProducts, setOrdersAction } from '../../../actions';
import { IOrder } from '../../interfaces';
import { dateFormat, defaultStyles, spinner } from '../../../constans';
import { getOrdersSelector } from '../../../selectors';
import styles from './OrdersListStyles';

export const OrdersList: React.FC = () => {
  const dispatch = useDispatch();

  const ordersData = useSelector(getOrdersSelector);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // TODO: Mock Data
    getProducts('68').then(products => {
      const orders: IOrder[] = [
        {
          id: 'OD23456ERJ454E',
          date: moment().format(dateFormat),
          totalAmount: (+products[0].price + +products[1].price).toFixed(2),
          paymentMode: 'COD',
          shippingAddress: {
            name: 'San Francisco, CA 94110, USA',
            coordinates: {
              latitude: 37.75129,
              longitude: -122.41724,
            },
          },
          status: 'In-Processing',
          products: [products[0], products[1]],
        },
        {
          id: 'AX34556ERJ454E',
          date: moment().subtract(7, 'd').format(dateFormat),
          totalAmount: (+products[2].price + +products[3].price).toFixed(2),
          paymentMode: 'COD',
          shippingAddress: {
            name: '7614 Sunset Blvd, Los Angeles, CA 90046, United States',
            coordinates: {
              latitude: 34.09779,
              longitude: -118.35569,
            },
          },
          status: 'Done',
          products: [products[2], products[3]],
        },
      ];

      dispatch(setOrdersAction(orders));

      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <Header />
      {isLoading ? (
        <View style={spinner}>
          <LoadingIndicator color={defaultStyles.colors.blue} />
        </View>
      ) : (
        <View style={styles.container}>
          <FlatList
            data={ordersData}
            keyExtractor={(item: IOrder) => item.id}
            renderItem={({ item }: { item: IOrder }) => <Orders order={item} />}
          />
        </View>
      )}
    </>
  );
};
