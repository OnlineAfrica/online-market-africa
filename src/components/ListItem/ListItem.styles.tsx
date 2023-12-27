import styled from 'styled-components/native';

export const ListItemContainer = styled.Pressable<{
  isFirst: boolean;
  isLast: boolean;
}>`
  border-top-left-radius: ${({isFirst}) => (isFirst ? 12 : 0)}px;
  border-top-right-radius: ${({isFirst}) => (isFirst ? 12 : 0)}px;
  border-bottom-left-radius: ${({isLast}) => (isLast ? 12 : 0)}px;
  border-bottom-right-radius: ${({isLast}) => (isLast ? 12 : 0)}px;
  padding: ${({theme}) => theme.spacing.s}px;
  background-color: ${({theme}) => theme.colors.background.secondary};
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const IconContainer = styled.View`
  padding-horizontal: ${({theme}) => theme.spacing.xs}px;
`;
