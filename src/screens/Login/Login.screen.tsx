import React, {useState} from 'react';
import {
  Container,
  ContentContainer,
  FooterContainer,
  FormContainer,
  LogoContainer,
  PressableSignUp,
  SignUpContainer,
} from './Login.styles';
import {Typography} from 'components/Typography/Typography.component';
import {Button} from 'components/Button/Button.component';
import {InputText} from 'components/Forms/TextInput/TextInput.component';
import Lock from 'assets/icons/lock.svg';
import Email from 'assets/icons/email.svg';
import auth from '@react-native-firebase/auth';
import {Formik} from 'formik';
import {LoginSchema} from 'services/Yup/LoginSchema.yup';
import {Alert} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {
  AppStackParamList,
  ScreenNames,
  TabScreenNames,
} from 'routing/routing.types';
import {LoadingOverlay} from 'components/LoadingOverlay/LoadingOverlay.component';
import Logo from 'assets/icons/logo.svg';

export const Login = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation<NavigationProp<AppStackParamList>>();

  const handleLogin = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      await auth().signInWithEmailAndPassword(email, password);
      navigation.navigate(ScreenNames.AppTabs, {screen: TabScreenNames.Home});
    } catch (error) {
      Alert.alert(
        'Something went wrong.',
        'Please verify that your email and password are correct.',
        [{text: 'Go back', style: 'cancel'}],
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignupNavigation = () => {
    navigation.navigate(ScreenNames.Register);
  };

  return (
    <Container>
      <LoadingOverlay isVisible={isLoading} />
      <Formik
        validationSchema={LoginSchema}
        initialValues={{email: '', password: ''}}
        onSubmit={values => handleLogin(values.email, values.password)}>
        {({handleSubmit, dirty, isValid}) => {
          return (
            <>
              <ContentContainer>
                <Typography variant="heading">Hello, Welcome Back!</Typography>
                <Typography variant="body3">
                  Please login to buy some of our amazing products. Your login
                  credentials are secure and protected.
                </Typography>
                <FormContainer>
                  <LogoContainer>
                    <Logo width={140} height={140} />
                  </LogoContainer>
                  <InputText
                    name="email"
                    LeftIcon={Email}
                    label="Email Address"
                  />
                  <InputText
                    name="password"
                    secureTextEntry={true}
                    LeftIcon={Lock}
                    label="Password"
                  />
                </FormContainer>
              </ContentContainer>
              <FooterContainer>
                <Button
                  variant="primary"
                  onPress={handleSubmit}
                  isDisabled={!(isValid && dirty)}
                  title="Login"
                />
                <SignUpContainer>
                  <Typography variant="body3">
                    Don't have an account?
                  </Typography>
                  <PressableSignUp onPress={handleSignupNavigation}>
                    <Typography variant="button">Sign up</Typography>
                  </PressableSignUp>
                </SignUpContainer>
              </FooterContainer>
            </>
          );
        }}
      </Formik>
    </Container>
  );
};
