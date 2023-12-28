import React from 'react';
import {LoadingOverlayContainer} from './LoadingOverlay.styles';
import {ActivityIndicator} from 'react-native';
import {useTheme} from 'styled-components/native';

export const LoadingOverlay = ({isVisible = false}): JSX.Element => {
  const theme = useTheme();

  return isVisible ? (
    <LoadingOverlayContainer>
      <ActivityIndicator
        size="small"
        color={theme.colors.foreground.lightText}
      />
    </LoadingOverlayContainer>
  ) : (
    <></>
  );
};
