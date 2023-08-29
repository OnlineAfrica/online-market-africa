import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeNavigatorRouting, HomeStack} from 'routing/routing.types';
import {Home} from 'screens/Home/Home.screen';
import {ProductDetails} from 'screens/ProductDetails/ProductDetails.screen';

const Stack = createStackNavigator<HomeStack>();

export const HomeNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={HomeNavigatorRouting.Home}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={HomeNavigatorRouting.Home} component={Home} />
      <Stack.Screen
        name={HomeNavigatorRouting.ProductDetails}
        component={ProductDetails}
      />
    </Stack.Navigator>
  );
};
