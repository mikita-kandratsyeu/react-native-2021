import { StyleSheet } from 'react-native';
import { defaultStyles } from '../../../constans';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  wrapper: {
    width: 225,
    height: 225,
    borderRadius: 10,
    padding: defaultStyles.padding.medium,
    backgroundColor: defaultStyles.colors.white,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    alignItems: 'center',
  },

  title: {
    margin: defaultStyles.margin.medium,
    fontWeight: 'bold',
    fontSize: defaultStyles.fontSize.large,
  },

  description: {
    fontSize: defaultStyles.fontSize.small,
    color: defaultStyles.colors.black,
    textAlign: 'center',
  },

  button: {
    width: 200,
    backgroundColor: defaultStyles.colors.blue,
    margin: defaultStyles.margin.medium,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  buttonText: {
    color: defaultStyles.colors.white,
    textTransform: 'uppercase',
    fontSize: defaultStyles.fontSize.medium,
    fontWeight: 'bold',
  },
});

export default styles;
