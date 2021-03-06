import { StyleSheet } from 'react-native';
import { defaultStyles } from '../../../../../constans';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: defaultStyles.padding.large,
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

  productListContainer: {
    flex: 1,
  },

  productColumnWrapper: {
    justifyContent: 'space-between',
  },

  productContainer: {
    flex: 1,
    height: 180,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: defaultStyles.colors.blue,
    marginBottom: 5,
  },
});

export const marginLeftCalc = (index: number) => ({
  marginLeft: index % 2 ? 3 : 5,
});

export default styles;
