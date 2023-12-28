/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  ScreenNames,
  AppStackParamList,
  TabScreenNames,
} from 'routing/routing.types';
import {ProductDetails} from 'screens/ProductDetails/ProductDetails.screen';
import {useTheme} from 'styled-components/native';
import {AppTabs} from 'routing/TabRouting/TabRouting.route';
import {Login} from 'screens/Login/Login.screen';
import {Account} from 'screens/Account/Account.screen';
import ArrowLeft from 'assets/icons/arrow-left.svg';
import HomeIcon from 'assets/icons/home.svg';
import {PressableBackIconContainer} from 'routing/routing.styles';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {Register} from 'screens/Register/Register.screen';

const Stack = createStackNavigator<AppStackParamList>();

export const AppNavigator = () => {
  const theme = useTheme();
  const navigation = useNavigation<NavigationProp<AppStackParamList>>();
  return (
    <Stack.Navigator
      initialRouteName={ScreenNames.AppTabs}
      screenOptions={{
        headerShadowVisible: false,
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: theme.colors.background.app,
        },
      }}>
      <Stack.Screen
        name={ScreenNames.AppTabs}
        component={AppTabs}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={ScreenNames.ProductDetails}
        component={ProductDetails}
        options={({route}) => ({
          title: route.params.title,
          headerLeft: () => (
            <PressableBackIconContainer onPress={() => navigation.goBack()}>
              <ArrowLeft
                width={22}
                height={22}
                color={theme.colors.foreground.accent}
              />
            </PressableBackIconContainer>
          ),
        })}
      />
      <Stack.Screen
        name={ScreenNames.Login}
        component={Login}
        options={{
          title: '',
          headerLeft: () => null,
          headerRight: () => (
            <PressableBackIconContainer
              onPress={() =>
                navigation.navigate(ScreenNames.AppTabs, {
                  screen: TabScreenNames.Home,
                })
              }>
              <HomeIcon
                width={26}
                height={26}
                color={theme.colors.foreground.accent}
              />
            </PressableBackIconContainer>
          ),
        }}
      />
      <Stack.Screen
        name={ScreenNames.Register}
        component={Register}
        options={{
          title: '',
          headerLeft: () => null,
          headerRight: () => (
            <PressableBackIconContainer
              onPress={() =>
                navigation.navigate(ScreenNames.AppTabs, {
                  screen: TabScreenNames.Home,
                })
              }>
              <HomeIcon
                width={26}
                height={26}
                color={theme.colors.foreground.accent}
              />
            </PressableBackIconContainer>
          ),
        }}
      />
      <Stack.Screen
        name={ScreenNames.Account}
        component={Account}
        options={{
          title: '',
          headerLeft: () => (
            <PressableBackIconContainer onPress={() => navigation.goBack()}>
              <ArrowLeft
                width={22}
                height={22}
                color={theme.colors.foreground.accent}
              />
            </PressableBackIconContainer>
          ),
        }}
      />
    </Stack.Navigator>
  );
};
