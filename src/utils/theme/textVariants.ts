import {styled} from 'styled-components/native';
import {ThemeVariantTypes} from './types';

export const Heading = styled.Text`
  color: ${({theme}) => theme.colors.foreground.text};
  font-size: ${({theme}) => theme.font.fontSize.xxl}px;
  font-family: Arial;
  font-weight: 600;
`;

export const SubTitle = styled.Text`
  color: ${({theme}) => theme.colors.foreground.lightText};
  font-size: ${({theme}) => theme.font.fontSize.l}px;
  font-family: Arial;
  font-weight: 500;
`;

export const Body1 = styled.Text`
  color: ${({theme}) => theme.colors.foreground.text};
  font-size: ${({theme}) => theme.font.fontSize.m}px;
  font-family: Arial;
  font-weight: 400;
`;

export const Body2 = styled.Text`
  color: ${({theme}) => theme.colors.foreground.text};
  font-size: ${({theme}) => theme.font.fontSize.s}px;
  font-family: Arial;
  font-weight: 400;
`;

export const Accent = styled.Text`
  color: ${({theme}) => theme.colors.foreground.primary};
  font-size: ${({theme}) => theme.font.fontSize.m}px;
  font-family: Arial;
  font-weight: 500;
`;

export const textVariants: ThemeVariantTypes = {
  heading: Heading,
  subtitle: SubTitle,
  body1: Body1,
  body2: Body2,
  accent: Accent,
};
