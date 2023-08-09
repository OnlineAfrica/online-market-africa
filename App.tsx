import 'react-native-gesture-handler';

import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import {theme} from 'utils/theme/theme';
import {AppRouting} from 'routing/AppRouting/AppRouting.route';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <AppRouting />
    </ThemeProvider>
  );
}

export default App;
