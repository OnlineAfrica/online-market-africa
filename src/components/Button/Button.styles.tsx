import styled, {css} from 'styled-components/native';
import {ButtonVariant} from './Button.types';

export const ButtonContainer = styled.TouchableHighlight<{
  variant: ButtonVariant;
}>`
  margin: ${({theme}) => theme.spacing.xs}px ${({theme}) => theme.spacing.m}px;
  padding: ${({theme}) => theme.spacing.xs}px;
  justify-content: center;
  align-items: center;
  ${({variant, theme}) =>
    variant === 'primary' &&
    css`
      background-color: ${theme.colors.background.buttonPrimary};
      border: ${theme.spacing.tiny}px solid
        ${theme.colors.background.buttonPrimary};
      border-radius: ${theme.spacing.s}px;
    `}
  ${({variant, theme}) =>
    variant === 'secondary' &&
    css`
      background-color: ${theme.colors.background.app};
      border: ${theme.spacing.tiny}px solid
        ${theme.colors.background.buttonPrimary};
      border-radius: ${theme.spacing.s}px;
    `}
`;

export const ContentContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
