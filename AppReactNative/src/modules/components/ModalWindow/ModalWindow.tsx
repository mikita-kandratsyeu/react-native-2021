import React, { useEffect } from 'react';
import { Modal, View, Text, Pressable, Vibration } from 'react-native';
import { IModalWindowProps } from './interfaces';
import { defaultStyles } from '../../../constans';
import { getCapitalizeWord } from '../../../services';
import styles from './ModalWindowStyles';

export const ModalWindow: React.FC<IModalWindowProps> = ({
  modalType,
  description,
  buttonTitle,
  isVisible,
  setIsVisible,
  onPress,
  isBackButtonBlock,
  isCustomButtonVisible,
}) => {
  const vibratePattern = [1000, 2000, 3000];

  const getTitleColor = (): string => {
    switch (modalType) {
      case 'warning':
        return defaultStyles.colors.orange;
      case 'success':
        return defaultStyles.colors.green;
      case 'error':
        return defaultStyles.colors.red;
      default:
        return defaultStyles.colors.black;
    }
  };

  useEffect(() => {
    if (isVisible) Vibration.vibrate(vibratePattern);
  }, [isVisible]);

  return (
    <Modal
      animationType="fade"
      transparent
      visible={isVisible}
      onRequestClose={() => {
        if (!isBackButtonBlock) setIsVisible(false);
      }}>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={[styles.title, { color: getTitleColor() }]}>
            {`${getCapitalizeWord(modalType)}!`}
          </Text>
          <Text style={styles.description}>{description}</Text>
          {isCustomButtonVisible && (
            <Pressable
              style={styles.button}
              onPress={() => {
                onPress?.();
                setIsVisible(false);
              }}>
              <Text style={styles.buttonText}>{buttonTitle}</Text>
            </Pressable>
          )}
        </View>
      </View>
    </Modal>
  );
};
