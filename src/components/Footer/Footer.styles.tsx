import styled from 'styled-components/native';

export const FooterContainer = styled.View`
  background-color: ${({theme}) => theme.colors.background.appSecondary};
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding-bottom: ${({theme}) => theme.spacing.xxl}px;
  padding-top: ${({theme}) => theme.spacing.s}px;
`;

export const PrimaryButtonContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ButtonContainer = styled.View`
  width: 87%;
`;

export const IconContainer = styled.TouchableOpacity`
  width: 13%;
`;
