import { StyleSheet } from 'react-native';
import { defaultStyles, margins } from '../../../constans';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  title: {
    ...margins,
    marginTop: defaultStyles.margin.medium,
    backgroundColor: defaultStyles.colors.transparent,
    fontSize: defaultStyles.fontSize.large,
    textAlign: 'center',
    color: defaultStyles.colors.blue,
    fontWeight: '700',
  },

  iconArrowBack: {
    width: defaultStyles.fontSize.large,
    height: defaultStyles.fontSize.large,
    marginLeft: defaultStyles.margin.large,
    marginTop: defaultStyles.margin.large,
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

  registrationButton: {
    alignSelf: 'center',
  },

  loginButton: {
    ...margins,
    marginTop: defaultStyles.margin.small,
    alignSelf: 'stretch',
    backgroundColor: defaultStyles.colors.blue,
  },

  link: {
    color: defaultStyles.colors.link,
    fontSize: defaultStyles.fontSize.medium,
  },
});

export default styles;
