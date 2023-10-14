import React from 'react';
import {IconBackgroundProps} from './IconBackground.types';
import {IconBackgroundContainer} from './IconBackground.styles';

export const IconBackground = ({
  children,
}: IconBackgroundProps): JSX.Element => {
  return <IconBackgroundContainer>{children}</IconBackgroundContainer>;
};
