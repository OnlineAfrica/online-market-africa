import styled from 'styled-components/native';

export const PressableContainer = styled.Pressable`
  flex: 1;
  width: 220px;
  height: 320px;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  background-color: ${({theme}) => theme.colors.background.secondary};
  border: 1px solid #b3b3b3;
`;

export const StyledImage = styled.Image`
  width: 100%;
  height: 100%;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

export const StyledImageContainer = styled.View`
  height: 65%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const ContentContainer = styled.View`
  padding-top: ${({theme}) => theme.spacing.xxs}px;
  width: 100%;
  height: 35%;
`;

export const IconContainer = styled.Pressable`
  position: absolute;
  z-index: 1;
  top: ${({theme}) => theme.spacing.xs}px;
  right: ${({theme}) => theme.spacing.s}px;
`;

export const RatingContainer = styled.View`
  flex-direction: row;
  padding-left: ${({theme}) => theme.spacing.xxs}px;
  align-items: center;
`;
