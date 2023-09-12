import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {HomeNavigator} from 'routing/HomeRouting/HomeNavigator.route';

export const AppRouting = (): JSX.Element => {
  return (
    <NavigationContainer>
      <HomeNavigator />
    </NavigationContainer>
  );
};
