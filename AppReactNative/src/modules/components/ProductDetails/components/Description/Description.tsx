/* eslint-disable */
import React from 'react';
import { Text, View, NativeModules } from 'react-native';
import {
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import { IDescriptionProps } from './interfaces';
import { defaultStyles } from '../../../../../constans';
import styles from './DescriptionStyles';

// TODO: Test SQLite
const { ToastModule, StorageModule } = NativeModules;

StorageModule.insertItem('qweqweqweqweqe', '113123123123', () => {
  StorageModule.getItem('qweqweqweqweqe', (e: any, data: string) => {
    console.info('======================================>', data)
  })
})

StorageModule.insertItem('kkk', '{ ff: 1111}', () => {
  StorageModule.getItem('kkk', (e: any, data: string) => {
    console.info('======================================>', data)
  })
})


export const Description: React.FC<IDescriptionProps> = ({ description }) => (
  <View style={styles.container}>
    <Text style={styles.header}>Description: </Text>
    <Text style={styles.description}>{description}</Text>
    <View style={styles.controlsContainer}>
      <View style={styles.wishListWrapper}>
        <TouchableHighlight
          underlayColor={defaultStyles.colors.pressLink}
          onPress={() => {
            StorageModule.getItem('id', (err: any, data: any) => {
              if (err) {
                console.error(err);
              }

              console.info(data);
            });
          }}>
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
          onPress={() =>
            // ToastModule.showText(
            //   'Product added to your cart',
            //   ToastModule.LENGTH_SHORT,
            // )
            StorageModule.insertItem('id', 'mikita', (err: any, data: any) => {
              if (err) {
                console.error(err);
              }

              console.info(data);
            })
          }>
          <View style={styles.addToCart}>
            <Text style={styles.addToCartText}>Add to Cart</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);
