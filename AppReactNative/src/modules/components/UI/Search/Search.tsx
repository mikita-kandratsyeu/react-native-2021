import React from 'react';
import { TextInput, View } from 'react-native';
import { ISearchProps } from './interfaces';
import { styles } from './SearchStyles';
import { IconSearch } from '../IconSearch';
import { defaultStyles } from '../../../../constans';

export const Search: React.FC<ISearchProps> = ({ isVisible, placeholder }) =>
  isVisible ? (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <IconSearch isVisible />
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={defaultStyles.colors.grey}
        />
      </View>
    </View>
  ) : null;
