/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ScreenNames, AppStackParamList} from 'routing/routing.types';
import {ProductDetails} from 'screens/ProductDetails/ProductDetails.screen';
import {useTheme} from 'styled-components/native';
import {AppTabs} from 'routing/TabRouting/TabRouting.route';
import {Login} from 'screens/Login/Login.screen';
import {Account} from 'screens/Account/Account.screen';
import ArrowLeft from 'assets/icons/arrow-left.svg';
import {PressableBackIconContainer} from 'routing/routing.styles';
import {useNavigation} from '@react-navigation/native';

const Stack = createStackNavigator<AppStackParamList>();

export const AppNavigator = () => {
  const theme = useTheme();
  const navigation = useNavigation();
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
                width={30}
                height={30}
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
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={ScreenNames.Account}
        component={Account}
        options={{
          title: 'Profile',
          headerLeft: () => (
            <PressableBackIconContainer onPress={() => navigation.goBack()}>
              <ArrowLeft
                width={30}
                height={30}
                color={theme.colors.foreground.accent}
              />
            </PressableBackIconContainer>
          ),
        }}
      />
    </Stack.Navigator>
  );
};
