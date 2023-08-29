import {TextProps} from 'react-native';
import {IStyledComponent} from 'styled-components/native';

export interface ColorTypes {
  foreground: {
    primary: string;
    secondary: string;
    accent: string;
    text: string;
    lightText: string;
    title: string;
    star: string;
  };
  background: {
    app: string;
    primary: string;
    secondary: string;
    accent: string;
    buttonPrimary: string;
    buttonSecondary: string;
    buttonAccent: string;
    buttonPressedPrimary: string;
    buttonPressedSecondary: string;
    buttonPressedAccent: string;
  };
  white: string;
}

export interface FontSizeTypes {
  xxs: number;
  xs: number;
  s: number;
  m: number;
  l: number;
  xl: number;
  xxl: number;
  h: number;
}

export interface ThemeVariantTypes {
  heading: IStyledComponent<'native', Omit<TextProps, never>>;
  subtitle: IStyledComponent<'native', Omit<TextProps, never>>;
  body1: IStyledComponent<'native', Omit<TextProps, never>>;
  body2: IStyledComponent<'native', Omit<TextProps, never>>;
  body3: IStyledComponent<'native', Omit<TextProps, never>>;
  accent: IStyledComponent<'native', Omit<TextProps, never>>;
}

export interface Spacing {
  xxs: number;
  xs: number;
  s: number;
  m: number;
  l: number;
  xl: number;
  xxl: number;
}

export interface ThemeTypes {
  colors: ColorTypes;
  font: {
    fontSize: FontSizeTypes;
    variant: ThemeVariantTypes;
  };
  spacing: Spacing;
}
