import {styled} from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background.primary};
`;

export const StyleableImage = styled.Image`
  width: 100%;
  height: 150px;
`;

export const ProductCardContainer = styled.View`
  margin: ${({theme}) => theme.spacing.m}px;
`;
