import {TextProps} from 'react-native';
import {IStyledComponent} from 'styled-components/native';

export interface ColorTypes {
  foreground: {
    primary: string;
    secondary: string;
    accent: string;
    text: string;
    bodyLight: string;
    danger: string;
    lightText: string;
    white: string;
    title: string;
    star: string;
  };
  background: {
    app: string;
    appSecondary: string;
    transparent: string;
    primary: string;
    secondary: string;
    disabled: string;
    accent: string;
    skeleton: string;
    loading: string;
    buttonPrimary: string;
    buttonSecondary: string;
    buttonAccent: string;
    buttonPressedPrimary: string;
    buttonPressedSecondary: string;
    buttonPressedAccent: string;
  };
  white: string;
  border: string;
}

export interface FontSizeTypes {
  xxs: number;
  xs: number;
  s: number;
  sm: number;
  m: number;
  l: number;
  xl: number;
  xxl: number;
  h: number;
}

export interface ThemeVariantTypes {
  heading: IStyledComponent<'native', Omit<TextProps, never>>;
  title: IStyledComponent<'native', Omit<TextProps, never>>;
  subtitle: IStyledComponent<'native', Omit<TextProps, never>>;
  body1: IStyledComponent<'native', Omit<TextProps, never>>;
  body2: IStyledComponent<'native', Omit<TextProps, never>>;
  body3: IStyledComponent<'native', Omit<TextProps, never>>;
  accent: IStyledComponent<'native', Omit<TextProps, never>>;
  light: IStyledComponent<'native', Omit<TextProps, never>>;
  button: IStyledComponent<'native', Omit<TextProps, never>>;
  dangerText: IStyledComponent<'native', Omit<TextProps, never>>;
}

export interface Spacing {
  tiny: number;
  xxxs: number;
  xxs: number;
  xs: number;
  s: number;
  m: number;
  l: number;
  xl: number;
  xxl: number;
  b: number;
}

export interface ThemeTypes {
  colors: ColorTypes;
  font: {
    fontSize: FontSizeTypes;
    variant: ThemeVariantTypes;
  };
  spacing: Spacing;
}
