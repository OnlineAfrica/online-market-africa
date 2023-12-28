import React, {useState} from 'react';
import {Container, HeaderContainer, SectionContainer} from './Account.styles';
import auth from '@react-native-firebase/auth';
import {MessageView} from 'components/MessageView/MessageView.component';
import {useNavigation} from '@react-navigation/native';
import {AppStackParamList, ScreenNames} from 'routing/routing.types';
import {StackNavigationProp} from '@react-navigation/stack';
import {LoadingOverlay} from 'components/LoadingOverlay/LoadingOverlay.component';
import {ListItem} from 'components/ListItem/ListItem.component';
import {Typography} from 'components/Typography/Typography.component';
import AccountIcon from 'assets/icons/account-outline.svg';
import HelpIcon from 'assets/icons/question-mark.svg';
import LogoutIcon from 'assets/icons/logout.svg';
import ReviewIcon from 'assets/icons/review.svg';
import PasswordIcon from 'assets/icons/update-password.svg';
import RemoveIcon from 'assets/icons/remove.svg';
import OrdersIcon from 'assets/icons/orders.svg';
import {useTheme} from 'styled-components/native';

export const Account = () => {
  const user = auth().currentUser;
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation<StackNavigationProp<AppStackParamList>>();
  const theme = useTheme();

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await auth().signOut();
      navigation.navigate(ScreenNames.Login);
    } catch (err) {
    } finally {
      setIsLoading(false);
    }
  };

  if (user == null) {
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
      <LoadingOverlay isVisible={isLoading} />
      <HeaderContainer>
        <Typography variant="heading">{user.displayName!}</Typography>
      </HeaderContainer>
      <SectionContainer>
        <Typography variant="subtitle">General</Typography>
        <ListItem
          isFirst
          title="My details"
          onPress={() => {}}
          leftIcon={
            <AccountIcon
              color={theme.colors.background.buttonPrimary}
              width={24}
              height={24}
            />
          }
        />
        <ListItem
          title="Orders"
          onPress={() => {}}
          leftIcon={
            <OrdersIcon
              color={theme.colors.background.buttonPrimary}
              width={24}
              height={24}
            />
          }
        />
        <ListItem
          title="Help and Support"
          onPress={() => {}}
          leftIcon={
            <HelpIcon
              color={theme.colors.background.buttonPrimary}
              width={24}
              height={24}
            />
          }
        />
        <ListItem
          isLast
          title="Rate us"
          onPress={() => {}}
          leftIcon={
            <ReviewIcon
              color={theme.colors.background.buttonPrimary}
              width={24}
              height={24}
            />
          }
        />
      </SectionContainer>
      <SectionContainer>
        <Typography variant="subtitle">Account</Typography>
        <ListItem
          isFirst
          title="Update password"
          onPress={() => {}}
          leftIcon={
            <PasswordIcon
              color={theme.colors.background.buttonPrimary}
              width={24}
              height={24}
            />
          }
        />
        <ListItem
          title="Remove account"
          onPress={() => {}}
          leftIcon={
            <RemoveIcon
              color={theme.colors.background.buttonPrimary}
              width={24}
              height={24}
            />
          }
        />
        <ListItem
          isLast
          title="Log out"
          onPress={handleLogout}
          leftIcon={
            <LogoutIcon
              color={theme.colors.background.buttonPrimary}
              width={24}
              height={24}
            />
          }
        />
      </SectionContainer>
    </Container>
  );
};
