import { StyleSheet } from 'react-native';
import { defaultStyles } from '../../../constans';

const styles = StyleSheet.create({
  container: {
    marginBottom: defaultStyles.margin.small,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },

  imageWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    overflow: 'hidden',
    marginTop: defaultStyles.margin.small,
    marginBottom: defaultStyles.margin.small,
  },

  image: {
    height: 110,
    width: 120,
  },

  title: {
    fontSize: defaultStyles.fontSize.small,
    fontWeight: 'bold',
  },

  priceWrapper: {
    flexDirection: 'row',
  },

  price: {
    fontWeight: 'bold',
  },

  oldPrice: {
    marginLeft: defaultStyles.margin.medium,
    fontWeight: 'bold',
    textDecorationLine: 'line-through',
  },

  discount: {
    marginLeft: defaultStyles.margin.medium,
    color: defaultStyles.colors.blue,
    fontWeight: 'bold',
  },
});

export const extendStyles = StyleSheet.create({
  container: {
    flex: 1,
    margin: defaultStyles.margin.medium,
    padding: defaultStyles.margin.medium,
  },

  imageWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    overflow: 'hidden',
    marginTop: defaultStyles.margin.small,
  },

  image: {
    height: 350,
    width: '100%',
  },

  title: {
    fontSize: defaultStyles.fontSize.large,
    fontWeight: 'bold',
  },

  priceWrapper: {
    marginTop: defaultStyles.margin.medium,
    flexDirection: 'row',
  },

  price: {
    fontWeight: 'bold',
    fontSize: defaultStyles.fontSize.large,
  },

  oldPrice: {
    marginLeft: defaultStyles.margin.medium,
    fontWeight: 'bold',
    textDecorationLine: 'line-through',
    fontSize: defaultStyles.fontSize.medium,
  },

  discount: {
    marginLeft: defaultStyles.margin.medium,
    color: defaultStyles.colors.blue,
    fontWeight: 'bold',
    fontSize: defaultStyles.fontSize.medium,
  },

  inStockWrapper: {
    marginTop: defaultStyles.margin.large,
    marginBottom: defaultStyles.margin.large,
    backgroundColor: defaultStyles.colors.blue,
    padding: defaultStyles.padding.large,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
  },

  inStock: {
    color: defaultStyles.colors.white,
    fontSize: defaultStyles.fontSize.medium,
  },
});

export default styles;
