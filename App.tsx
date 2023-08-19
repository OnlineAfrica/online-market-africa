import 'react-native-gesture-handler';

import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import {theme} from 'utils/theme/theme';
import {AppRouting} from 'routing/AppRouting/AppRouting.route';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <AppRouting />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default App;
