import { StyleSheet } from 'react-native';
import { defaultStyles } from '../../../../../constans';

const styles = StyleSheet.create({
  container: {
    margin: defaultStyles.margin.small,
  },

  header: {
    color: defaultStyles.colors.blue,
    fontSize: defaultStyles.fontSize.medium,
    fontWeight: 'bold',
  },

  description: {
    paddingTop: defaultStyles.padding.small,
    paddingBottom: defaultStyles.padding.small,
    marginBottom: defaultStyles.padding.small,
    fontSize: defaultStyles.fontSize.small,
  },

  controlsContainer: {
    flex: 1,
    flexDirection: 'row',
  },

  wishListWrapper: {
    flexGrow: 1,
    flexBasis: 1,
  },

  wishList: {
    flexDirection: 'row',
    padding: defaultStyles.padding.large,
    alignItems: 'center',
    justifyContent: 'center',
  },

  wishListText: {
    color: defaultStyles.colors.black,
    fontSize: defaultStyles.fontSize.small,
  },

  wishListIcon: {
    marginRight: defaultStyles.margin.small,
  },

  addToCartWrapper: {
    flexGrow: 1,
    flexBasis: 1,
  },

  addToCart: {
    padding: defaultStyles.padding.large,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: defaultStyles.colors.blue,
  },

  addToCartText: {
    color: defaultStyles.colors.white,
    fontSize: defaultStyles.fontSize.small,
  },
});

export default styles;
