/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from 'screens/Home/Home.screen';
import {
  AppStackParamList,
  AppTabParamList,
  ScreenNames,
  TabScreenNames,
} from 'routing/routing.types';
import {useTheme} from 'styled-components/native';
import HomeIcon from '../../assets/icons/home.svg';
import CategoriesIcon from '../../assets/icons/category.svg';
import WishListIcon from '../../assets/icons/wishlist.svg';
import CartIcon from '../../assets/icons/cart.svg';
import AccountIcon from '../../assets/icons/account.svg';
import {Categories} from 'screens/Categories/Categories.screen';
import {Wishlist} from 'screens/Wishlist/Wishlist.screen';
import {Cart} from 'screens/Cart/Cart.screen';
import {PressableIconContainer} from 'routing/routing.styles';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

const Tab = createBottomTabNavigator<AppTabParamList>();

export const AppTabs = () => {
  const theme = useTheme();
  const navigation = useNavigation<StackNavigationProp<AppStackParamList>>();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colors.background.buttonPrimary,
        tabBarInactiveTintColor: theme.colors.foreground.lightText,
        tabBarStyle: {
          backgroundColor: theme.colors.background.appSecondary,
          height: '10%',
        },
        tabBarShowLabel: true,
        headerShadowVisible: false,
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: theme.colors.background.app,
        },
      }}>
      <Tab.Screen
        name={TabScreenNames.Home}
        component={Home}
        options={{
          title: 'Shop',
          tabBarIcon: ({color}) => (
            <HomeIcon color={color} width={24} height={24} />
          ),
          headerRight: () => (
            <PressableIconContainer
              onPress={() => navigation.navigate(ScreenNames.Account)}>
              <AccountIcon
                color={theme.colors.background.buttonPrimary}
                width={26}
                height={26}
              />
            </PressableIconContainer>
          ),
        }}
      />
      <Tab.Screen
        name={TabScreenNames.Categories}
        component={Categories}
        options={{
          title: 'Categories',
          tabBarIcon: ({color}) => (
            <CategoriesIcon color={color} width={24} height={24} />
          ),
        }}
      />
      <Tab.Screen
        name={TabScreenNames.WishList}
        component={Wishlist}
        options={{
          title: 'Wishlist',
          tabBarIcon: ({color}) => (
            <WishListIcon color={color} width={24} height={19} />
          ),
        }}
      />
      <Tab.Screen
        name={TabScreenNames.Cart}
        component={Cart}
        options={{
          title: 'My Cart',
          tabBarIcon: ({color}) => (
            <CartIcon color={color} width={24} height={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
