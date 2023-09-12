import styled from 'styled-components/native';

export const FooterContainer = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding-vertical: ${({theme}) => theme.spacing.xxl}px;
  background-color: ${({theme}) => theme.colors.background.primary};
`;
