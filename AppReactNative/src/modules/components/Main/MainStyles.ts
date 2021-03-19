import { StyleSheet } from 'react-native';
import { defaultStyles } from '../../../constans';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  productCategory: {
    flexDirection: 'row',
  },

  productCategoryScroll: {
    height: 100,
  },

  productList: {
    padding: defaultStyles.padding.large,
  },
});

export default styles;
