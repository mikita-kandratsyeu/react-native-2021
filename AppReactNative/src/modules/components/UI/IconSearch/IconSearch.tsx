import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { IIconSearchProps } from './interfaces';
import { defaultStyles } from '../../../../constans';

export const IconSearch: React.FC<IIconSearchProps> = ({ isVisible, color }) =>
  isVisible ? (
    <Icon
      name="search1"
      size={defaultStyles.fontSize.large}
      color={color || defaultStyles.colors.white}
    />
  ) : null;
