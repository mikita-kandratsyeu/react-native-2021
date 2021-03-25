import { StyleSheet } from 'react-native';
import { defaultStyles } from '../../../constans';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: defaultStyles.colors.white,
  },

  productCategory: {
    flexDirection: 'row',
  },

  productCategoryScroll: {
    height: 100,
  },
});

export default styles;
