import React from 'react';
import { Text, View } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faArrowLeft,
  faBars,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import { IHeaderProps } from './interfaces';
import { Search, IconSearch } from '../UI';
import { defaultStyles } from '../../../constans';
import styles from './HeaderStyles';

export const Header: React.FC<IHeaderProps> = ({
  title = '',
  isToggleButtonVisible,
  isSearchVisible,
}) => {
  const renderLeftHeaderControl = (): React.ReactNode =>
    isToggleButtonVisible ? (
      <TouchableHighlight
        style={styles.iconButton}
        underlayColor={defaultStyles.colors.grey}
        onPress={() => {}}>
        <FontAwesomeIcon
          icon={faBars}
          size={defaultStyles.fontSize.large}
          color={defaultStyles.colors.white}
        />
      </TouchableHighlight>
    ) : (
      <TouchableHighlight
        style={styles.iconButton}
        underlayColor={defaultStyles.colors.grey}
        onPress={() => {}}>
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
        <Text style={styles.title}>{title}</Text>
        <View style={styles.rightHeaderControl}>
          <TouchableHighlight
            style={styles.iconButton}
            underlayColor={defaultStyles.colors.transparent}
            onPress={() => {}}>
            <IconSearch
              isVisible={!isSearchVisible}
              color={defaultStyles.colors.white}
            />
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.iconButton}
            underlayColor={defaultStyles.colors.grey}
            onPress={() => {}}>
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
