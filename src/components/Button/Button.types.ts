export type ButtonVariant = 'primary' | 'secondary' | 'accent';

export interface ButtonProps {
  variant: ButtonVariant;
  title: string;
  isDisabled?: boolean;
  rightIcon?: React.ReactNode;
  onPress: () => void;
}
