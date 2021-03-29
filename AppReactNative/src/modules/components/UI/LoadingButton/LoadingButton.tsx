import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { LayoutAnimation, Text } from 'react-native';
import { LoadingIndicator } from '..';
import { ILoadingButtonProps } from './interfaces';
import { defaultStyles } from '../../../../constans';
import styles from './LoadingButtonStyles';

export const LoadingButton: React.FC<ILoadingButtonProps> = ({
  isLoading,
  isError,
  onPress,
  defaultTitle,
  errorTitle,
}) => (
  <RectButton
    style={[styles.loginButton, isLoading && styles.loginButtonLoading]}
    enabled={!isLoading}
    underlayColor={defaultStyles.colors.pressLink}
    onPress={() => {
      LayoutAnimation.easeInEaseOut();
      if (!isLoading) onPress();
    }}>
    {isLoading ? (
      <LoadingIndicator />
    ) : (
      <Text style={styles.loginText}>
        {isError ? errorTitle : defaultTitle}
      </Text>
    )}
  </RectButton>
);
