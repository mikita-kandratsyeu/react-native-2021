import { StyleSheet } from 'react-native';
import { defaultStyles, margins } from '../../../constans';

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
    alignSelf: 'stretch',
    backgroundColor: defaultStyles.colors.blue,
  },

  link: {
    color: defaultStyles.colors.link,
    fontSize: defaultStyles.fontSize.medium,
  },
});

export default styles;
