import { StyleSheet } from 'react-native';
import { defaultStyles } from '../../../constans';

const margins = {
  margin: defaultStyles.margin.large,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  title: {
    ...margins,
    marginTop: 150,
    backgroundColor: defaultStyles.colors.transparent,
    fontSize: defaultStyles.fontSize.large,
    textAlign: 'center',
    color: defaultStyles.colors.blue,
    fontWeight: '700',
  },

  input: {
    ...margins,
    marginTop: defaultStyles.margin.medium,
    alignSelf: 'stretch',
    backgroundColor: defaultStyles.colors.transparent,
    borderBottomWidth: 1,
    color: defaultStyles.colors.black,
    fontSize: defaultStyles.fontSize.medium,
  },

  restoreButton: {
    ...margins,
    marginTop: defaultStyles.margin.medium,
    alignSelf: 'center',
  },

  registrationButton: {
    ...margins,
    alignSelf: 'center',
  },

  loginButton: {
    ...margins,
    padding: defaultStyles.padding.medium,
    alignSelf: 'stretch',
    backgroundColor: defaultStyles.colors.blue,
  },

  loginText: {
    textAlign: 'center',
    color: defaultStyles.colors.white,
    textTransform: 'uppercase',
    fontSize: defaultStyles.fontSize.medium,
  },

  link: {
    color: defaultStyles.colors.link,
    fontSize: defaultStyles.fontSize.medium,
  },
});

export default styles;
