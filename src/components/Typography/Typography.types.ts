import {TextProps} from 'react-native';

export type VariantType =
  | 'body1'
  | 'body2'
  | 'body3'
  | 'accent'
  | 'heading'
  | 'title'
  | 'subtitle'
  | 'button'
  | 'light';

export type TextAlignType = 'auto' | 'center' | 'right' | 'left';

export interface TypographyTypes extends TextProps {
  testId?: string;
  children: string | string[];
  variant: VariantType;
  align?: TextAlignType;
}
