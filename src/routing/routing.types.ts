import {NavigatorScreenParams} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export enum ScreenNames {
  AppTabs = 'appTabs',
  ProductDetails = 'productDetails',
  Login = 'login',
  Register = 'register',
  Account = 'account',
}

export enum TabScreenNames {
  Home = 'home',
  Categories = 'categories',
  Cart = 'cart',
  WishList = 'wishlist',
}

export type AppTabParamList = {
  [TabScreenNames.Home]: undefined;
  [TabScreenNames.Categories]: undefined;
  [TabScreenNames.WishList]: undefined;
  [TabScreenNames.Cart]: undefined;
};

export type AppStackParamList = {
  [ScreenNames.AppTabs]: NavigatorScreenParams<AppTabParamList>;
  [ScreenNames.ProductDetails]: {id: string; title: string};
  [ScreenNames.Login]: undefined;
  [ScreenNames.Register]: undefined;
  [ScreenNames.Account]: undefined;
};

export type AppStackParamsList = StackNavigationProp<AppStackParamList>;
