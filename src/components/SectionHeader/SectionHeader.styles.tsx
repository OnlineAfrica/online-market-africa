import {styled} from 'styled-components/native';

export const Container = styled.View`
  padding: ${({theme}) => theme.spacing.m}px ${({theme}) => theme.spacing.xxs}px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;
