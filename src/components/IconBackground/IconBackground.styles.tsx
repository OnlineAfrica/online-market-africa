import styled from 'styled-components/native';

export const IconBackgroundContainer = styled.View`
  width: 90px;
  height: 90px;
  border-radius: 90px;
  background-color: ${({theme}) =>
    theme.colors.background.buttonPressedSecondary};
  justify-content: center;
  align-items: center;
  margin: ${({theme}) => theme.spacing.s}px;
`;
