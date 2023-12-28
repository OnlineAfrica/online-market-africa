import {styled} from 'styled-components/native';

export const Container = styled.View`
  margin-vertical: ${({theme}) => theme.spacing.xs}px;
`;

export const LoadingContainer = styled.View`
  margin-vertical: ${({theme}) => theme.spacing.xs}px;
  background-color: ${({theme}) => theme.colors.background.skeleton};
  height: 19px;
  width: 70px;
  border-radius: ${({theme}) => theme.spacing.xxs}px;
`;
