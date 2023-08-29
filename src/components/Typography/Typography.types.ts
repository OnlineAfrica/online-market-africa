export type VariantType =
  | 'body1'
  | 'body2'
  | 'body3'
  | 'accent'
  | 'heading'
  | 'subtitle';

export interface TypographyTypes {
  testId?: string;
  children: string | string[];
  variant: VariantType;
}
