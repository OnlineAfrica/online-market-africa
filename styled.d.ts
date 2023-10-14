import 'styled-components/native';
import {theme} from 'utils/theme/theme';

type ThemeInterface = typeof theme;

declare module 'styled-components/native' {
  interface DefaultTheme extends ThemeInterface {}
}
