import { StyleSheet } from 'react-native';
import { defaultStyles } from '../../../../constans';

const styles = StyleSheet.create({
  container: {
    minHeight: 30,
    padding: defaultStyles.padding.large,
    backgroundColor: defaultStyles.colors.blue,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  iconButton: {
    display: 'flex',
    width: defaultStyles.fontSize.large,
    height: defaultStyles.fontSize.large,
  },

  rightHeaderControl: {
    flexBasis: 60,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  title: {
    fontSize: defaultStyles.fontSize.medium,
    color: defaultStyles.colors.white,
  },
});

export default styles;
