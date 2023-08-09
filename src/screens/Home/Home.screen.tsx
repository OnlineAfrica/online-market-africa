import {Typography} from 'components/Typography/Typography.component';
import React from 'react';
import {useTheme} from 'styled-components/native';

export const Home = () => {
  const theme = useTheme();

  console.log(theme.font.variant);
  return (
    <>
      <Typography variant="body1">Test</Typography>
    </>
  );
};
