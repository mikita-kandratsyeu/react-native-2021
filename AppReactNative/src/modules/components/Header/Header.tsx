import React from 'react';
import { View } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { IHeaderProps } from './interfaces';
import { Search, IconSearch } from '../UI';
import { defaultStyles, StackRouters } from '../../../constans';
import styles from './HeaderStyles';

export const Header: React.FC<IHeaderProps> = ({
  isToggleButtonVisible,
  isSearchVisible,
  isSearchIconVisible,
  isShoppingCartVisible,
}) => {
  const navigator = useNavigation();

  const renderLeftHeaderControl = (): React.ReactNode =>
    isToggleButtonVisible ? (
      <TouchableHighlight
        style={styles.iconButton}
        underlayColor={defaultStyles.colors.pressLink}
        onPress={() => navigator.dispatch(DrawerActions.toggleDrawer())}>
        <Icon
          name="bars"
          size={defaultStyles.fontSize.large}
          color={defaultStyles.colors.white}
        />
      </TouchableHighlight>
    ) : (
      <TouchableHighlight
        style={styles.iconButton}
        underlayColor={defaultStyles.colors.pressLink}
        onPress={() => navigator.goBack()}>
        <Icon
          name="arrowleft"
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
            onPress={() => navigator.navigate(StackRouters.mockComponent)}>
            <IconSearch
              isVisible={isSearchIconVisible}
              color={defaultStyles.colors.white}
            />
          </TouchableHighlight>
          {isShoppingCartVisible && (
            <TouchableHighlight
              style={styles.iconButton}
              underlayColor={defaultStyles.colors.pressLink}
              onPress={() => navigator.navigate(StackRouters.mockComponent)}>
              <Icon
                name="shoppingcart"
                size={defaultStyles.fontSize.large}
                color={defaultStyles.colors.white}
              />
            </TouchableHighlight>
          )}
        </View>
      </View>
      <Search
        isVisible={!!isSearchVisible}
        placeholder="Search for products..."
      />
    </View>
  );
};
