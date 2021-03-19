import { StyleSheet } from 'react-native';
import { defaultStyles } from '../../../../../constans';

export const styles = StyleSheet.create({
  header: {
    margin: defaultStyles.margin.small,
    alignSelf: 'stretch',
  },

  headerTitle: {
    color: defaultStyles.colors.blue,
    fontSize: defaultStyles.fontSize.medium,
  },

  flatListWrapper: {
    marginLeft: defaultStyles.margin.small,
    marginRight: defaultStyles.margin.small,
    marginBottom: defaultStyles.margin.medium,
  },

  flatListItem: {
    backgroundColor: defaultStyles.colors.grey,
    alignItems: 'center',
    justifyContent: 'center',
    padding: defaultStyles.padding.medium,
    marginRight: defaultStyles.margin.large,
  },

  flatListItemText: {
    color: defaultStyles.colors.black,
    textTransform: 'uppercase',
  },
});
