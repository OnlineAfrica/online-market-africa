import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeNavigatorRouting, HomeStack} from 'routing/routing.types';
import {ProductDetails} from 'screens/ProductDetails/ProductDetails.screen';
import {useTheme} from 'styled-components/native';
import {AppTabs} from 'routing/TabRouting/TabRouting.route';

const Stack = createStackNavigator<HomeStack>();

export const HomeNavigator = () => {
  const theme = useTheme();
  return (
    <Stack.Navigator
      initialRouteName={HomeNavigatorRouting.Home}
      screenOptions={{
        headerShadowVisible: false,
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: theme.colors.background.primary,
        },
      }}>
      <Stack.Screen
        name={HomeNavigatorRouting.Home}
        component={AppTabs}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={HomeNavigatorRouting.ProductDetails}
        component={ProductDetails}
      />
    </Stack.Navigator>
  );
};
