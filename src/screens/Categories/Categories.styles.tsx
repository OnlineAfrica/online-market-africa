import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CategoriesContainer = styled.View`
  width: 100%;
`;

export const CategoryContainer = styled.View`
  width: 50%;
  align-items: center;
  margin-vertical: ${({theme}) => theme.spacing.s}px;
`;
