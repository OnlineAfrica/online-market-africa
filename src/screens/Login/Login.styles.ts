import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  width: 100%;
`;

export const ContentContainer = styled.ScrollView`
  padding: ${({theme}) => theme.spacing.m}px;
`;

export const FooterContainer = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  padding-horizontal: ${({theme}) => theme.spacing.m}px;
  padding-bottom: ${({theme}) => theme.spacing.l}px;
`;

export const SignUpContainer = styled.View`
  padding-vertical: ${({theme}) => theme.spacing.xl}px;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

export const FormContainer = styled.View`
  padding-vertical: ${({theme}) => theme.spacing.xxs}px;
`;

export const PressableSignUp = styled.Pressable`
  padding-horizontal: ${({theme}) => theme.spacing.xxs}px;
`;

export const LogoContainer = styled.Pressable`
  justify-content: center;
  align-items: center;
`;
