import styled from 'styled-components/native';
import {InputTypes} from './TextInput.types';

export const Container = styled.View`
  padding: ${({theme}) => theme.spacing.s}px;
`;

export const StyledTextInput = styled.TextInput<InputTypes>`
  padding-left: ${({theme}) => theme.spacing.s}px;
  justify-content: center;
  align-items: center;
  background-color: ${({isEditable, theme}) =>
    isEditable
      ? theme.colors.background.app
      : theme.colors.background.disabled};
  width: 100%;
`;

export const TextInputContainer = styled.View<InputTypes>`
  padding: ${({theme}) => theme.spacing.m}px ${({theme}) => theme.spacing.l}px;
  flex-direction: row;
  margin-top: ${({theme}) => theme.spacing.xs}px;
  justify-content: center;
  align-items: center;
  border-color: ${({theme, hasFocus, hasError}) =>
    hasError
      ? theme.colors.foreground.danger
      : hasFocus
      ? theme.colors.background.buttonPrimary
      : theme.colors.foreground.bodyLight};
  border-radius: 6px;
  height: 48px;
  background-color: ${({isEditable, theme}) =>
    isEditable
      ? theme.colors.background.app
      : theme.colors.background.disabled};
  width: 100%;
  border-width: 1.3px;
`;

export const ErrorContainer = styled.View`
  padding-left: ${({theme}) => theme.spacing.s}px;
`;
