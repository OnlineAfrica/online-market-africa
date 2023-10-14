import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const StyleableImage = styled.Image`
  width: 100%;
  height: 150px;
`;

export const ProductCardContainer = styled.View`
  margin-horizontal: ${({theme}) => theme.spacing.s}px;
  padding-bottom: ${({theme}) => theme.spacing.s}px;
`;
