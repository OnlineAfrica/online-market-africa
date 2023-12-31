import styled from 'styled-components/native';

export const LoadingOverlayContainer = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  align-items: center;
  justify-content: center;
  z-index: 20;
  height: 100%;
  background-color: ${({theme}) => theme.colors.background.loading};
`;
