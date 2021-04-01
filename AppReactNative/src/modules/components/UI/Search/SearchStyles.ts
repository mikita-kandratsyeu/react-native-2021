import { StyleSheet } from 'react-native';
import { defaultStyles } from '../../../../constans';

export const styles = StyleSheet.create({
  container: {
    padding: defaultStyles.padding.large,
    backgroundColor: defaultStyles.colors.blue,
  },

  inputWrapper: {
    backgroundColor: defaultStyles.colors.white,
    borderRadius: 10,
    borderColor: defaultStyles.colors.white,
    flexDirection: 'row',
  },

  input: {
    height: 40,
  },

  icon: {
    marginLeft: defaultStyles.margin.small,
    marginRight: defaultStyles.margin.small,
    alignSelf: 'center',
  },
});
