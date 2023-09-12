import styled from 'styled-components/native';

export const Container = styled.View<{bgColor?: string}>`
  margin: ${({theme}) => theme.spacing.xxs}px;
  padding: ${({theme}) => theme.spacing.xxs}px;
  border-radius: ${({theme}) => theme.spacing.m}px;
  background-color: ${({theme, bgColor}) =>
    bgColor ?? theme.colors.background.secondary};
`;
