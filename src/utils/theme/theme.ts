import {colors} from './colors';
import {fontSize} from './fonts';
import {spacing} from './spacing';
import {textVariants} from './textVariants';
import {ThemeTypes} from './types';

export const theme: ThemeTypes = {
  colors: colors,
  font: {
    fontSize: fontSize,
    variant: textVariants,
  },
  spacing: spacing,
};
