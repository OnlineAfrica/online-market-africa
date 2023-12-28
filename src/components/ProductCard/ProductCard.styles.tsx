import styled from 'styled-components/native';

export const PressableContainer = styled.Pressable`
  flex: 1;
  width: 190px;
  height: 290px;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  background-color: ${({theme}) => theme.colors.background.appSecondary};
  border: 0.1px solid ${({theme}) => theme.colors.border};
`;

export const PressableSecondaryContainer = styled.Pressable<{
  isFirst?: boolean;
  isLast?: boolean;
}>`
  width: 100%;
  border-color: ${({theme}) => theme.colors.border};
  border-bottom-width: ${({isLast}) => (isLast ? 0.5 : 0)}px;
  border-top-width: ${({isFirst}) => (isFirst ? 0.5 : 0)}px;
  height: 130px;
  align-items: center;
  flex-direction: row;
  background-color: ${({theme}) => theme.colors.background.appSecondary};
`;

export const StyledImage = styled.Image`
  min-width: 100%;
  max-width: 100%;
  height: 100%;
  background-color: ${({theme}) => theme.colors.background.skeleton};
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

export const StyledImageContainer = styled.View`
  height: 62%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const StyledSecondaryImageContainer = styled.View`
  height: 90%;
  width: 32%;
  justify-content: center;
  align-items: center;
  margin-horizontal: ${({theme}) => theme.spacing.xxs}px;
`;

export const StyledSecondaryImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: ${({theme}) => theme.spacing.xxs}px;
`;

export const ContentSecondaryContainer = styled.View`
  padding-left: ${({theme}) => theme.spacing.xxs}px;
`;

export const ContentContainer = styled.View`
  padding-vertical: ${({theme}) => theme.spacing.xxs}px;
  padding-left: ${({theme}) => theme.spacing.xs}px;
  width: 100%;
  height: 38%;
`;

export const IconContainer = styled.Pressable`
  position: absolute;
  z-index: 1;
  top: ${({theme}) => theme.spacing.xs}px;
  right: ${({theme}) => theme.spacing.s}px;
`;

export const CartIconContainer = styled.View`
  position: absolute;
  z-index: 1;
  bottom: ${({theme}) => theme.spacing.s}px;
  right: ${({theme}) => theme.spacing.s}px;
`;

export const RatingContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const RowContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
