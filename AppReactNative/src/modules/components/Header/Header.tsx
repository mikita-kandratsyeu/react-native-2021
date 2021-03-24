import React from 'react';
import { View } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faArrowLeft,
  faBars,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { IHeaderProps } from './interfaces';
import { Search, IconSearch } from '../UI';
import { defaultStyles } from '../../../constans';
import styles from './HeaderStyles';

export const Header: React.FC<IHeaderProps> = ({
  isToggleButtonVisible,
  isSearchVisible,
}) => {
  const navigator = useNavigation();

  const renderLeftHeaderControl = (): React.ReactNode =>
    isToggleButtonVisible ? (
      <TouchableHighlight
        style={styles.iconButton}
        underlayColor={defaultStyles.colors.pressLink}
        onPress={() => navigator.dispatch(DrawerActions.toggleDrawer())}>
        <FontAwesomeIcon
          icon={faBars}
          size={defaultStyles.fontSize.large}
          color={defaultStyles.colors.white}
        />
      </TouchableHighlight>
    ) : (
      <TouchableHighlight
        style={styles.iconButton}
        underlayColor={defaultStyles.colors.pressLink}
        onPress={() => navigator.goBack()}>
        <FontAwesomeIcon
          icon={faArrowLeft}
          size={defaultStyles.fontSize.large}
          color={defaultStyles.colors.white}
        />
      </TouchableHighlight>
    );

  return (
    <View>
      <View style={styles.container}>
        {renderLeftHeaderControl()}
        <View style={styles.rightHeaderControl}>
          <TouchableHighlight
            style={styles.iconButton}
            underlayColor={defaultStyles.colors.pressLink}
            onPress={() => null}>
            <IconSearch
              isVisible={!isSearchVisible}
              color={defaultStyles.colors.white}
            />
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.iconButton}
            underlayColor={defaultStyles.colors.pressLink}
            onPress={() => null}>
            <FontAwesomeIcon
              icon={faShoppingCart}
              size={defaultStyles.fontSize.large}
              color={defaultStyles.colors.white}
            />
          </TouchableHighlight>
        </View>
      </View>
      <Search
        isVisible={!!isSearchVisible}
        placeholder="Search for products..."
      />
    </View>
  );
};
