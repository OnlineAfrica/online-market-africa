export interface FooterProps {
  primaryButtonText: string;
  primaryButtonOnPress: () => void;
  secondaryButtonText?: string;
  secondaryButtonOnPress?: () => void;
  icon?: JSX.Element;
  onIconPress?: () => void;
}
