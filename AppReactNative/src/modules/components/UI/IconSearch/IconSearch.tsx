import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { IIconSearchProps } from './interfaces';
import { defaultStyles } from '../../../../constans';
import styles from './IconSearchStyles';

export const IconSearch: React.FC<IIconSearchProps> = ({ isVisible, color }) =>
  isVisible ? (
    <FontAwesomeIcon
      icon={faSearch}
      style={styles.container}
      size={defaultStyles.fontSize.large}
      color={color || defaultStyles.colors.grey}
    />
  ) : null;
