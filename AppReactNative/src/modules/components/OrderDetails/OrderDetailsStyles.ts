import { StyleSheet } from 'react-native';
import { defaultStyles } from '../../../constans';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: defaultStyles.colors.white,
  },

  wrapper: {
    padding: defaultStyles.padding.medium,
    marginTop: defaultStyles.margin.small,
  },

  textWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: defaultStyles.margin.small,
  },

  itemTitle: {
    color: defaultStyles.colors.blue,
    fontSize: defaultStyles.fontSize.medium,
    fontWeight: 'bold',
  },

  itemDescription: {
    color: defaultStyles.colors.black,
    fontSize: defaultStyles.fontSize.medium,
    width: 150,
  },

  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: defaultStyles.colors.black,
    fontSize: defaultStyles.fontSize.medium,
  },

  image: {
    height: 77,
    width: 84,
  },

  productWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: defaultStyles.padding.medium,
    borderBottomColor: defaultStyles.colors.black,
    borderBottomWidth: 2,
    alignItems: 'center',
  },

  productTitle: {
    fontSize: defaultStyles.fontSize.medium,
    color: defaultStyles.colors.blue,
    marginBottom: defaultStyles.margin.small,
  },

  productPrice: {
    fontSize: defaultStyles.fontSize.medium,
    color: defaultStyles.colors.black,
    fontWeight: 'bold',
  },
});

export default styles;
