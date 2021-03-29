import { StyleSheet } from 'react-native';
import { defaultStyles, margins } from '../../../constans';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  title: {
    ...margins,
    marginTop: defaultStyles.margin.small,
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

  loginButton: {
    alignSelf: 'center',
  },

  registrationButton: {
    ...margins,
    marginTop: defaultStyles.margin.medium,
    alignSelf: 'stretch',
    backgroundColor: defaultStyles.colors.blue,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  registrationButtonText: {
    color: defaultStyles.colors.white,
    fontWeight: 'bold',
    fontSize: defaultStyles.fontSize.small,
  },

  link: {
    color: defaultStyles.colors.link,
    fontSize: defaultStyles.fontSize.medium,
  },
});

export default styles;
