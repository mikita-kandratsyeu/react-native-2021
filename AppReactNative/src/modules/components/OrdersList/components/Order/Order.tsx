import React from 'react';
import { View, Text, Image } from 'react-native';
import { FlatList, TouchableHighlight } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { IOrderProps } from './interfaces';
import { IProduct } from '../../../../interfaces';
import {
  defaultStyles,
  maxLengthTitleProductList,
} from '../../../../../constans';
import styles from './OrderStyles';
import { getTruncatedString } from '../../../../../services';

export const Orders: React.FC<IOrderProps> = ({ order }) => {
  const navigator = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        data={order.products}
        keyExtractor={(item: IProduct) => item.id}
        renderItem={({ item }: { item: IProduct }) => (
          <View style={styles.productWrapper}>
            <Text style={styles.productName}>
              {getTruncatedString(item.name, maxLengthTitleProductList)}
            </Text>
            <Image style={styles.productImage} source={item.source} />
          </View>
        )}
      />
      <View style={styles.bottomWrapper}>
        <TouchableHighlight
          underlayColor={defaultStyles.colors.pressLink}
          onPress={() => navigator.navigate('mapView')}>
          <Text style={styles.link}>View Order Details</Text>
        </TouchableHighlight>
        <Text style={styles.date}>Date: {order.date}</Text>
      </View>
    </View>
  );
};
