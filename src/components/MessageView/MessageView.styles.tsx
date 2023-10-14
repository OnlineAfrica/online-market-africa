import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: ${({theme}) => theme.spacing.xxl}px;
`;

export const IconContainer = styled.View`
  justify-content: center;
  align-items: center;
  padding-bottom: ${({theme}) => theme.spacing.l}px;
`;

export const SubtitleContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const CTAContainer = styled.View`
  padding-top: ${({theme}) => theme.spacing.xs}px;
  width: 75%;
`;
