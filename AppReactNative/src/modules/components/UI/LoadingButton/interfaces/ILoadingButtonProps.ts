export interface ILoadingButtonProps {
  isLoading: boolean;
  onPress: () => void;
  isError: boolean;
  defaultTitle: string;
  errorTitle: string;
}
