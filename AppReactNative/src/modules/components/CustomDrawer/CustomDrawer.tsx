import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { setUserData } from '../../../actions';
import { defaultStyles, DrawerRouters, nameOfStore } from '../../../constans';
import styles from './CustomDrawerStyles';

export const CustomDrawer: React.FC<DrawerContentComponentProps> = props => {
  const navigator = useNavigation();
  const dispatch = useDispatch();

  return (
    <DrawerContentScrollView {...props} style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{nameOfStore}</Text>
      </View>
      <View style={styles.group}>
        <Text style={styles.groupHeaderTitle}>My Account</Text>
        <DrawerItem
          label="My Profile"
          labelStyle={styles.labelStyle}
          style={styles.item}
          icon={() => (
            <Icon
              style={styles.itemIcon}
              name="user"
              size={defaultStyles.fontSize.medium}
              color={defaultStyles.colors.blue}
            />
          )}
          onPress={() => navigator.navigate(DrawerRouters.profile)}
        />
        <DrawerItem
          label="My Wish List"
          labelStyle={styles.labelStyle}
          style={styles.item}
          icon={() => (
            <Icon
              name="hearto"
              style={styles.itemIcon}
              size={defaultStyles.fontSize.medium}
              color={defaultStyles.colors.blue}
            />
          )}
          onPress={() => navigator.navigate(DrawerRouters.wishList)}
        />
        <DrawerItem
          label="My Cart"
          labelStyle={styles.labelStyle}
          style={styles.item}
          icon={() => (
            <Icon
              name="shoppingcart"
              style={styles.itemIcon}
              size={defaultStyles.fontSize.medium}
              color={defaultStyles.colors.blue}
            />
          )}
          onPress={() => navigator.navigate(DrawerRouters.cart)}
        />
        <DrawerItem
          label="My Orders"
          labelStyle={styles.labelStyle}
          style={styles.item}
          icon={() => (
            <Icon
              name="appstore1"
              style={styles.itemIcon}
              size={defaultStyles.fontSize.medium}
              color={defaultStyles.colors.blue}
            />
          )}
          onPress={() => navigator.navigate(DrawerRouters.orders)}
        />
      </View>
      <View style={styles.group}>
        <Text style={styles.groupHeaderTitle}>Support</Text>
        <DrawerItem
          label="Email"
          labelStyle={styles.labelStyle}
          style={styles.item}
          icon={() => (
            <Icon
              name="mail"
              style={styles.itemIcon}
              size={defaultStyles.fontSize.medium}
              color={defaultStyles.colors.blue}
            />
          )}
          onPress={() => null}
        />
        <DrawerItem
          label="Call"
          labelStyle={styles.labelStyle}
          style={styles.item}
          icon={() => (
            <Icon
              name="phone"
              style={styles.itemIcon}
              size={defaultStyles.fontSize.medium}
              color={defaultStyles.colors.blue}
            />
          )}
          onPress={() => null}
        />
      </View>
      <View
        style={[
          styles.group,
          { borderColor: defaultStyles.colors.transparent },
        ]}>
        <Text style={styles.groupHeaderTitle}>Others</Text>
        <DrawerItem
          label="Share"
          labelStyle={styles.labelStyle}
          style={styles.item}
          icon={() => (
            <Icon
              name="sharealt"
              style={styles.itemIcon}
              size={defaultStyles.fontSize.medium}
              color={defaultStyles.colors.blue}
            />
          )}
          onPress={() => null}
        />
        <DrawerItem
          label="Logout"
          labelStyle={styles.labelStyle}
          style={styles.item}
          icon={() => (
            <Icon
              name="logout"
              style={styles.itemIcon}
              size={defaultStyles.fontSize.medium}
              color={defaultStyles.colors.blue}
            />
          )}
          onPress={() => dispatch(setUserData('', ''))}
        />
      </View>
    </DrawerContentScrollView>
  );
};
