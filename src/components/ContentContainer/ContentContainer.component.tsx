import React from 'react';
import {Container} from './ContentContainer.styles';
import {ContentContainerProps} from './ContentContainer.types';

export const ContentContainer = ({
  backgroundColor,
  children,
}: ContentContainerProps): JSX.Element => {
  return (
    <Container
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        shadowColor: '#000',
        shadowRadius: 2,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.16,
        elevation: 4,
      }}
      bgColor={backgroundColor}>
      {children}
    </Container>
  );
};
