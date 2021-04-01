import React from 'react';
import { TextInput, View } from 'react-native';
import { ISearchProps } from './interfaces';
import { IconSearch } from '../IconSearch';
import { defaultStyles } from '../../../../constans';
import { styles } from './SearchStyles';

export const Search: React.FC<ISearchProps> = ({ isVisible, placeholder }) =>
  isVisible ? (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <View style={styles.icon}>
          <IconSearch isVisible />
        </View>

        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={defaultStyles.colors.grey}
        />
      </View>
    </View>
  ) : null;
