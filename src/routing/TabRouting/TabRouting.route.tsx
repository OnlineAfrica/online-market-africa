/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from 'screens/Home/Home.screen';
import {Account} from 'screens/Account/Account.screen';
import {AppTabRouting} from 'routing/routing.types';
import {useTheme} from 'styled-components/native';
import HomeIcon from '../../assets/icons/home.svg';

const Tab = createBottomTabNavigator();

export const AppTabs = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colors.foreground.secondary,
        tabBarInactiveTintColor: theme.colors.foreground.primary,
        tabBarStyle: {
          backgroundColor: theme.colors.background.secondary,
          height: 50,
        },
        tabBarShowLabel: false,
        headerShadowVisible: false,
        headerTitleAlign: 'center',
        headerStyle: {
          height: 70,
          backgroundColor: theme.colors.background.primary,
        },
      }}>
      <Tab.Screen
        name={AppTabRouting.Home}
        component={Home}
        options={{
          title: 'Shop',
          tabBarIcon: ({color, size}) => (
            <HomeIcon color={color} width={size} height={size} />
          ),
        }}
      />
      <Tab.Screen
        name={AppTabRouting.Categories}
        component={Home}
        options={{
          title: 'Categories',
          tabBarIcon: ({color, size}) => (
            <HomeIcon color={color} width={size} height={size} />
          ),
        }}
      />
      <Tab.Screen
        name={AppTabRouting.WishList}
        component={Home}
        options={{
          title: 'My List',
          tabBarIcon: ({color, size}) => (
            <HomeIcon color={color} width={size} height={size} />
          ),
        }}
      />
      <Tab.Screen
        name={AppTabRouting.Cart}
        component={Account}
        options={{
          title: 'My Cart',
          tabBarIcon: ({color}) => <HomeIcon color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};