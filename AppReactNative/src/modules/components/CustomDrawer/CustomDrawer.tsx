import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faUser,
  faHeart,
  faCartArrowDown,
  faShoppingCart,
  faEnvelope,
  faPhone,
  faShare,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { setUserData } from '../../../actions';
import { defaultStyles, nameOfStore } from '../../../constans';
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
            <FontAwesomeIcon
              style={styles.itemIcon}
              icon={faUser}
              size={defaultStyles.fontSize.large}
              color={defaultStyles.colors.blue}
            />
          )}
          onPress={() => navigator.navigate('Profile')}
        />
        <DrawerItem
          label="My Wish List"
          labelStyle={styles.labelStyle}
          style={styles.item}
          icon={() => (
            <FontAwesomeIcon
              style={styles.itemIcon}
              icon={faHeart}
              size={defaultStyles.fontSize.large}
              color={defaultStyles.colors.blue}
            />
          )}
          onPress={() => navigator.navigate('WishList')}
        />
        <DrawerItem
          label="My Cart"
          labelStyle={styles.labelStyle}
          style={styles.item}
          icon={() => (
            <FontAwesomeIcon
              style={styles.itemIcon}
              icon={faShoppingCart}
              size={defaultStyles.fontSize.large}
              color={defaultStyles.colors.blue}
            />
          )}
          onPress={() => navigator.navigate('Cart')}
        />
        <DrawerItem
          label="My Orders"
          labelStyle={styles.labelStyle}
          style={styles.item}
          icon={() => (
            <FontAwesomeIcon
              style={styles.itemIcon}
              icon={faCartArrowDown}
              size={defaultStyles.fontSize.large}
              color={defaultStyles.colors.blue}
            />
          )}
          onPress={() => navigator.navigate('Orders')}
        />
      </View>
      <View style={styles.group}>
        <Text style={styles.groupHeaderTitle}>Support</Text>
        <DrawerItem
          label="Email"
          labelStyle={styles.labelStyle}
          style={styles.item}
          icon={() => (
            <FontAwesomeIcon
              style={styles.itemIcon}
              icon={faEnvelope}
              size={defaultStyles.fontSize.large}
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
            <FontAwesomeIcon
              style={styles.itemIcon}
              icon={faPhone}
              size={defaultStyles.fontSize.large}
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
            <FontAwesomeIcon
              style={styles.itemIcon}
              icon={faShare}
              size={defaultStyles.fontSize.large}
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
            <FontAwesomeIcon
              style={styles.itemIcon}
              icon={faSignOutAlt}
              size={defaultStyles.fontSize.large}
              color={defaultStyles.colors.blue}
            />
          )}
          onPress={() => dispatch(setUserData('', ''))}
        />
      </View>
    </DrawerContentScrollView>
  );
};
