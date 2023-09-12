import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background.primary};
`;

export const ScollableContentContainer = styled.ScrollView`
  margin-bottom: 120px;
`;

export const ImageContainer = styled.View`
  background-color: ${({theme}) => theme.colors.background.accent};
  margin-bottom: ${({theme}) => theme.spacing.xs}px;
`;

export const StyledImage = styled.Image`
  width: 100%;
  height: 250px;
`;
