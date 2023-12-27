import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  width: 100%;
`;

export const Column = styled.View`
  padding-vertical: ${({theme}) => theme.spacing.xl}px;
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

export const LoginContainer = styled.View`
  padding-vertical: ${({theme}) => theme.spacing.xl}px;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

export const FormContainer = styled.View`
  padding-bottom: 160px;
`;

export const PressableLogin = styled.Pressable`
  padding-horizontal: ${({theme}) => theme.spacing.xxs}px;
`;

export const ContentContainer = styled.ScrollView`
  padding-horizontal: ${({theme}) => theme.spacing.m}px;
`;

export const ProgressStepContainer = styled.View`
  padding-vertical: ${({theme}) => theme.spacing.s}px;
`;

export const BackCTAContainer = styled.View`
  padding-vertical: ${({theme}) => theme.spacing.xs}px;
`;

export const StyledImage = styled.Image`
  width: 120px;
  height: 120px;
`;

export const StyledImageContainer = styled.View`
  padding-top: ${({theme}) => theme.spacing.l}px;
  justify-content: center;
  align-items: center;
`;

export const RowContainer = styled.View`
  padding: ${({theme}) => theme.spacing.m}px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const DoneContainer = styled.View`
  padding: ${({theme}) => theme.spacing.b}px;
  justify-content: center;
  align-items: center;
`;
