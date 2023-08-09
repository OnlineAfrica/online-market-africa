import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppTabs} from 'routing/TabRouting/TabRouting.route';

export const AppRouting = (): JSX.Element => {
  return (
    <NavigationContainer>
      <AppTabs />
    </NavigationContainer>
  );
};
