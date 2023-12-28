import React, {useCallback, useState} from 'react';
import {
  BackCTAContainer,
  Column,
  Container,
  ContentContainer,
  DoneContainer,
  FooterContainer,
  FormContainer,
  LoginContainer,
  PressableLogin,
  ProgressStepContainer,
  StyledImage,
} from './Register.styles';
import {Typography} from 'components/Typography/Typography.component';
import {Button} from 'components/Button/Button.component';
import {ProgressSteps} from 'components/ProgressSteps/ProgressSteps.component';
import {RegisterPageTypes} from './Register.types';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {
  AppStackParamList,
  ScreenNames,
  TabScreenNames,
} from 'routing/routing.types';
import {Formik} from 'formik';
import Lock from 'assets/icons/lock.svg';
import Email from 'assets/icons/email.svg';
import {RegisterSchema} from 'services/Yup/RegisterSchema.yup';
import {InputText} from 'components/Forms/TextInput/TextInput.component';
import {Alert, Platform} from 'react-native';
import auth from '@react-native-firebase/auth';
import {LoadingOverlay} from 'components/LoadingOverlay/LoadingOverlay.component';

export const Register = (): JSX.Element => {
  const navigation = useNavigation<NavigationProp<AppStackParamList>>();
  const [step, setStep] = useState<RegisterPageTypes>(
    RegisterPageTypes.AccountCreation,
  );
  const [isLoading, setIsLoading] = useState(false);

  const renderFormSteps = () => {
    switch (step) {
      case RegisterPageTypes.AccountCreation:
        return (
          <FormContainer>
            <InputText name="email" LeftIcon={Email} label="Email Address" />
            <InputText
              name="password"
              secureTextEntry={true}
              LeftIcon={Lock}
              label="Password"
            />
          </FormContainer>
        );
      case RegisterPageTypes.PersonalInformation:
        return (
          <FormContainer>
            <InputText name="firstName" label="First Name" />
            <InputText name="middleName" label="Middle Name" />
            <InputText name="lastName" label="Last Name" />
          </FormContainer>
        );
      case RegisterPageTypes.Done:
        return (
          <DoneContainer>
            <StyledImage source={require('../../assets/images/correct.png')} />
            <Column>
              <Typography variant="body2" align="center">
                Your account has been successfully registered.
              </Typography>
            </Column>
            <Button
              variant="secondary"
              onPress={() =>
                navigation.navigate(ScreenNames.AppTabs, {
                  screen: TabScreenNames.Home,
                })
              }
              title="Continue Shopping"
            />
          </DoneContainer>
        );
    }
  };

  const handleStepNavigation = async () => {
    switch (step) {
      case RegisterPageTypes.AccountCreation:
        setStep(RegisterPageTypes.PersonalInformation);
        break;
    }
  };

  const onHandleSubmit = useCallback(
    async (values: {
      email: string;
      password: string;
      firstName: string;
      middleName: string;
      lastName: string;
    }) => {
      setIsLoading(true);
      try {
        const {user} = await auth().createUserWithEmailAndPassword(
          values.email,
          values.password,
        );
        await user.updateProfile({
          displayName: `${values.firstName} ${values.middleName} ${values.lastName}`,
        });
        setStep(RegisterPageTypes.Done);
      } catch (err) {
        Alert.alert(
          'Something went wrong.',
          'We ran into an issue trying to create your account',
          [{text: 'Go back', style: 'cancel'}],
        );
      } finally {
        setIsLoading(false);
      }
    },
    [],
  );

  const handleBackStepNavigation = () => {
    switch (step) {
      case RegisterPageTypes.PersonalInformation:
        setStep(RegisterPageTypes.AccountCreation);
        break;
    }
  };

  const labels = ['Create\n Account', 'Personal\n Information', 'Done'];

  return (
    <Container
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <LoadingOverlay isVisible={isLoading} />
      <Formik
        validationSchema={RegisterSchema}
        initialValues={{
          email: '',
          password: '',
          firstName: '',
          middleName: '',
          lastName: '',
        }}
        onSubmit={values => onHandleSubmit(values)}>
        {({handleSubmit, dirty, isValid, errors, touched}) => {
          const isSubmitDisabled =
            step === RegisterPageTypes.AccountCreation
              ? touched.email &&
                errors.email === undefined &&
                touched.password &&
                errors.password === undefined
              : true;
          return (
            <>
              <ContentContainer showsVerticalScrollIndicator={false}>
                <Typography variant="heading">Register with us</Typography>
                <Typography variant="body3">
                  Please register to buy some of our amazing products. Your
                  credentials are secure and protected.
                </Typography>
                <ProgressStepContainer>
                  <ProgressSteps step={step} labels={labels} />
                </ProgressStepContainer>
                {renderFormSteps()}
              </ContentContainer>
              <FooterContainer>
                {step !== RegisterPageTypes.Done && (
                  <Button
                    variant="primary"
                    onPress={
                      step === RegisterPageTypes.PersonalInformation
                        ? handleSubmit
                        : handleStepNavigation
                    }
                    isDisabled={
                      step === RegisterPageTypes.PersonalInformation
                        ? !(isValid && dirty)
                        : !isSubmitDisabled
                    }
                    title={
                      step !== RegisterPageTypes.PersonalInformation
                        ? 'Continue'
                        : 'Sign Up'
                    }
                  />
                )}
                {step === RegisterPageTypes.AccountCreation && (
                  <LoginContainer>
                    <Typography variant="body3">
                      Already have an account?
                    </Typography>
                    <PressableLogin
                      onPress={() => navigation.navigate(ScreenNames.Login)}>
                      <Typography variant="button">Login</Typography>
                    </PressableLogin>
                  </LoginContainer>
                )}
                {step === RegisterPageTypes.PersonalInformation && (
                  <BackCTAContainer>
                    <Button
                      variant="accent"
                      onPress={handleBackStepNavigation}
                      title="Back"
                    />
                  </BackCTAContainer>
                )}
              </FooterContainer>
            </>
          );
        }}
      </Formik>
    </Container>
  );
};
