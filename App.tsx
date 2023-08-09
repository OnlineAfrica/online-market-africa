import 'react-native-gesture-handler';

import React from 'react';
import {SafeAreaView} from 'react-native';
import {Home} from 'screens/Home/Home.screen';
import {ThemeProvider} from 'styled-components/native';
import {theme} from 'utils/theme/theme';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
