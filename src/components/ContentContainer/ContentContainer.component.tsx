import React from 'react';
import {Container} from './ContentContainer.styles';
import {ContentContainerProps} from './ContentContainer.types';

export const ContentContainer = ({
  backgroundColor,
  children,
}: ContentContainerProps): JSX.Element => {
  return <Container bgColor={backgroundColor}>{children}</Container>;
};
