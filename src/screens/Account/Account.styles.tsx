import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  padding: ${({theme}) => theme.spacing.l}px;
`;

export const SectionContainer = styled.View`
  padding-vertical: ${({theme}) => theme.spacing.s}px;
`;

export const HeaderContainer = styled.View`
  padding-vertical: ${({theme}) => theme.spacing.xxxs}px;
`;
