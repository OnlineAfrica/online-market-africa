export type ButtonVariant = 'primary' | 'secondary' | 'accent';

export interface ButtonProps {
  variant: ButtonVariant;
  title: string;
  rightIcon?: React.ReactNode;
  onPress: () => void;
}
