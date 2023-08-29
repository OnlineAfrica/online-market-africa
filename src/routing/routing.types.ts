import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {NavigatorScreenParams} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export enum HomeNavigatorRouting {
  Home = 'home',
  ProductDetails = 'productDetails',
}

export enum AppTabRouting {
  HomeNav = 'HomeNavigator',
  Categories = 'categories',
  Cart = 'cart',
  WishList = 'wishlist',
}

export type HomeStack = {
  [HomeNavigatorRouting.Home]: undefined;
  [HomeNavigatorRouting.ProductDetails]: {id: string};
};

export type HomeStackParamList = StackNavigationProp<HomeStack>;

export type AppTab = {
  [AppTabRouting.HomeNav]: NavigatorScreenParams<HomeStackParamList>;
  [AppTabRouting.Categories]: undefined;
  [AppTabRouting.WishList]: undefined;
  [AppTabRouting.Cart]: undefined;
};

export type AppTabParamList = BottomTabNavigationProp<AppTab>;
