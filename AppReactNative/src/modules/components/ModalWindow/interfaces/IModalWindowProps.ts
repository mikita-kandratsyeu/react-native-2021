import { Dispatch, SetStateAction } from 'react';

export interface IModalWindowProps {
  modalType: 'warning' | 'success' | 'error';
  description: string;
  buttonTitle: string;
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
  onPress?: () => void;
  isBackButtonBlock?: boolean;
}
