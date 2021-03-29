import React from 'react';
import { Modal, View, Text, Pressable } from 'react-native';
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
}) => {
  const getTitleColor = (typeString: string): string => {
    switch (typeString) {
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
          <Text style={[styles.title, { color: getTitleColor(modalType) }]}>
            {getCapitalizeWord(modalType)}
          </Text>
          <Text style={styles.description}>{description}</Text>
          <Pressable
            style={styles.button}
            onPress={() => {
              if (onPress) onPress();
              setIsVisible(false);
            }}>
            <Text style={styles.buttonText}>{buttonTitle}</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};
