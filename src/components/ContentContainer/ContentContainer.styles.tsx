import styled from 'styled-components/native';

export const Container = styled.View<{bgColor?: string}>`
  margin-vertical: ${({theme}) => theme.spacing.xxs}px;
  padding: ${({theme}) => theme.spacing.xs}px;
  width: 100%;
  background-color: ${({theme, bgColor}) =>
    bgColor ?? theme.colors.background.appSecondary};
`;
