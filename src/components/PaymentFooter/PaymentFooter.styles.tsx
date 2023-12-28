import styled from 'styled-components/native';

export const FooterContainer = styled.View`
  background-color: ${({theme}) => theme.colors.background.appSecondary};
  position: absolute;
  border-top-width: 0.5px;
  border-color: ${({theme}) => theme.colors.foreground.lightText};
  bottom: 0;
  left: 0;
  right: 0;
`;

export const ContentContainer = styled.View`
  padding: ${({theme}) => theme.spacing.s}px ${({theme}) => theme.spacing.l}px;
`;

export const Divider = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${({theme}) => theme.colors.border};
  margin-vertical: ${({theme}) => theme.spacing.xs}px;
`;

export const TotalContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ItemRowContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonContainer = styled.View`
  width: 100%;
  padding-vertical: ${({theme}) => theme.spacing.s}px;
`;
