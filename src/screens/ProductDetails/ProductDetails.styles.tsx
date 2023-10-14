import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const ScollableContentContainer = styled.ScrollView`
  margin-bottom: 95px;
`;

export const ImageContainer = styled.View`
  background-color: ${({theme}) => theme.colors.background.appSecondary};
  margin-bottom: ${({theme}) => theme.spacing.xs}px;
`;

export const StyledImage = styled.Image`
  width: 100%;
  height: 250px;
`;

export const RatingContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const PriceContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
