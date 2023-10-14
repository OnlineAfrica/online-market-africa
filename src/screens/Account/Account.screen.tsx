import React from 'react';
import {Container} from './Account.styles';
import {Button} from 'components/Button/Button.component';
import auth from '@react-native-firebase/auth';
import {MessageView} from 'components/MessageView/MessageView.component';
import {useNavigation} from '@react-navigation/native';
import {AppStackParamList, ScreenNames} from 'routing/routing.types';
import {StackNavigationProp} from '@react-navigation/stack';

export const Account = () => {
  const user = auth().currentUser;
  console.log(user);

  const navigation = useNavigation<StackNavigationProp<AppStackParamList>>();
  if (!user || user == null) {
    return (
      <MessageView
        title="Not logged in"
        subtitle="Please log in to gain access to your account"
        ctaTitle="Log In"
        onPress={() => navigation.navigate(ScreenNames.Login)}
      />
    );
  }
  return (
    <Container>
      <Button onPress={() => {}} title="log in" variant="primary" />
    </Container>
  );
};
