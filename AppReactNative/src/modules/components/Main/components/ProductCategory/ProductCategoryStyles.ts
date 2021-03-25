import { StyleSheet } from 'react-native';
import { defaultStyles } from '../../../../../constans';

const styles = StyleSheet.create({
  wrapper: {
    width: 90,
    height: 90,
  },

  container: {
    marginRight: defaultStyles.margin.small,
    marginLeft: defaultStyles.margin.small,
    marginTop: defaultStyles.margin.medium,
    marginBottom: defaultStyles.margin.medium,
    alignItems: 'center',
    justifyContent: 'center',
  },

  imageWrapper: {
    width: 60,
    height: 60,
    borderWidth: 2,
    borderRadius: 60,
    borderColor: defaultStyles.colors.blue,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: 70,
    height: 70,
  },

  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: defaultStyles.colors.black,
  },
});

export default styles;
