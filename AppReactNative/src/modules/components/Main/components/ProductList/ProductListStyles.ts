import { StyleSheet } from 'react-native';
import { defaultStyles } from '../../../../../constans';

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
  },

  productListHeader: {
    marginBottom: defaultStyles.margin.small,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
  },

  productListTitle: {
    color: defaultStyles.colors.blue,
    fontSize: defaultStyles.fontSize.medium,
  },

  viewAllButton: {
    backgroundColor: defaultStyles.colors.blue,
    padding: defaultStyles.padding.small,
    borderRadius: 4,
  },

  viewAllButtonText: {
    paddingLeft: 5,
    paddingRight: 5,
    textAlign: 'center',
    color: defaultStyles.colors.white,
    fontSize: defaultStyles.fontSize.medium,
    fontWeight: 'bold',
  },

  productContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default styles;
