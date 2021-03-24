import { StyleSheet } from 'react-native';
import { defaultStyles } from '../../../constans';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    padding: defaultStyles.padding.large + 5,
    borderBottomWidth: 2,
    borderBottomColor: defaultStyles.colors.blue,
  },

  headerTitle: {
    fontSize: defaultStyles.fontSize.large + 12,
    fontWeight: 'bold',
    color: defaultStyles.colors.blue,
  },

  group: {
    padding: defaultStyles.padding.large,
    borderColor: defaultStyles.colors.grey,
    borderBottomWidth: 1,
  },

  groupHeaderTitle: {
    color: defaultStyles.colors.grey,
    fontSize: defaultStyles.fontSize.small,
  },

  labelStyle: {
    paddingLeft: 0,
    marginLeft: 0,
    color: defaultStyles.colors.black,
  },

  item: {
    paddingLeft: 0,
    marginLeft: -5,
  },

  itemIcon: {
    paddingRight: 0,
    marginRight: -15,
  },
});

export default styles;
