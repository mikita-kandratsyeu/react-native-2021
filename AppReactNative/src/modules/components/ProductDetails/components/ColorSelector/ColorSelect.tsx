import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { IColorSelectProps } from './inerfaces';
import { styles } from './ColorSelectStyles';

export const ColorSelect: React.FC<IColorSelectProps> = ({ colors }) => (
  <View>
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Select color: </Text>
    </View>
    <FlatList
      style={styles.flatListWrapper}
      data={colors}
      horizontal
      renderItem={({ item }) => (
        <TouchableOpacity key={item.id} style={styles.flatListItem}>
          <Text style={styles.flatListItemText}>{item.name}</Text>
        </TouchableOpacity>
      )}
    />
  </View>
);
