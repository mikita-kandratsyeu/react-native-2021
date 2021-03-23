import { StyleSheet } from 'react-native';
import { defaultStyles } from '../../../constans';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: defaultStyles.margin.small,
    justifyContent: 'center',
    alignItems: 'center',
    width: 190,
    height: 150,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: defaultStyles.colors.grey,
    backgroundColor: defaultStyles.colors.white,
  },

  imageWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    overflow: 'hidden',
    marginTop: defaultStyles.margin.small,
  },

  image: {
    height: 80,
    width: 120,
  },

  title: {
    fontSize: defaultStyles.fontSize.small,
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
    height: 250,
    width: '100%',
  },

  title: {
    fontSize: defaultStyles.fontSize.large,
    fontWeight: 'bold',
  },

  priceWrapper: {
    flexDirection: 'row',
  },

  price: {
    fontWeight: 'bold',
    fontSize: defaultStyles.fontSize.medium,
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
    marginTop: defaultStyles.margin.medium,
    backgroundColor: defaultStyles.colors.blue,
    padding: defaultStyles.padding.large,
    width: 100,
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
