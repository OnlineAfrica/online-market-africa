/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from 'screens/Home/Home.screen';
import {Account} from 'screens/Account/Account.screen';
import {AppTab, AppTabRouting} from 'routing/routing.types';
import {useTheme} from 'styled-components/native';
import HomeIcon from '../../assets/icons/home.svg';
import {HomeNavigator} from 'routing/HomeRouting/HomeNavigator.route';

const Tab = createBottomTabNavigator<AppTab>();

export const AppTabs = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colors.foreground.secondary,
        tabBarInactiveTintColor: theme.colors.foreground.primary,
        tabBarStyle: {
          backgroundColor: theme.colors.background.primary,
          height: '10%',
        },
        tabBarShowLabel: false,
        headerShadowVisible: false,
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: theme.colors.background.primary,
        },
      }}>
      <Tab.Screen
        name={AppTabRouting.HomeNav}
        component={HomeNavigator}
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
