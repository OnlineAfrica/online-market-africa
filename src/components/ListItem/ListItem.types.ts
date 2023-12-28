export interface ListItemProps {
  title: string;
  onPress?: () => void;
  rightIcon?: React.ReactElement;
  leftIcon?: React.ReactElement;
  isFirst?: boolean;
  isLast?: boolean;
}
