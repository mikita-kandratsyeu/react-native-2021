import { StyleSheet } from 'react-native';
import { defaultStyles } from '../../../constans';

const styles = StyleSheet.create({
  container: {
    marginRight: 'auto',
    flexBasis: 190,
    flexShrink: 2,
    padding: defaultStyles.padding.medium,
    marginBottom: defaultStyles.margin.small,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: defaultStyles.colors.grey,
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

export default styles;
