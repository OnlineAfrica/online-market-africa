import 'react-native-gesture-handler';

import React, {useEffect} from 'react';
import {ThemeProvider} from 'styled-components/native';
import {theme} from 'utils/theme/theme';
import {AppRouting} from 'routing/AppRouting/AppRouting.route';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ApolloProvider} from '@apollo/client';
import client from './server';
import {AppProvider} from 'providers/AppProvider';
import {useAuthStateChanged} from 'services/Firebase/useAuthStateChanged';
import {Typography} from 'components/Typography/Typography.component';

function App(): JSX.Element {
  const {authSubscriber, initializing} = useAuthStateChanged();

  useEffect(() => {
    return authSubscriber;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <ApolloProvider client={client}>
          <AppProvider>
            {initializing ? (
              <Typography variant="body1">Loading...</Typography>
            ) : (
              <AppRouting />
            )}
          </AppProvider>
        </ApolloProvider>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default App;
