import * as React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {AppNavigator} from 'routing/AppNavigator/AppNavigator.route';
import {theme} from 'utils/theme/theme';

export const AppRouting = (): JSX.Element => {
  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: theme.colors.background.app,
        },
      }}>
      <AppNavigator />
    </NavigationContainer>
  );
};
