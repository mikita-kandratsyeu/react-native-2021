import { StyleSheet } from 'react-native';
import { defaultStyles } from '../../../../../constans';

const styles = StyleSheet.create({
  container: {
    padding: defaultStyles.padding.medium,
    marginLeft: defaultStyles.margin.small,
    marginRight: defaultStyles.margin.small,
    marginTop: defaultStyles.margin.small,
    backgroundColor: defaultStyles.colors.white,
    borderColor: defaultStyles.colors.blue,
    borderWidth: 3,
    borderRadius: 10,
  },

  productWrapper: {
    borderBottomColor: defaultStyles.colors.black,
    borderBottomWidth: 2,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    padding: defaultStyles.padding.medium,
    paddingLeft: defaultStyles.padding.large,
    paddingRight: defaultStyles.padding.large,
  },

  productName: {
    color: defaultStyles.colors.black,
    fontSize: defaultStyles.fontSize.small,
    width: 180,
  },

  productImage: {
    height: 77,
    width: 84,
  },

  bottomWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: defaultStyles.padding.medium,
  },

  link: {
    color: defaultStyles.colors.blue,
    fontSize: defaultStyles.fontSize.small,
  },

  date: {
    color: defaultStyles.colors.grey,
    fontSize: defaultStyles.fontSize.small,
  },
});

export default styles;
