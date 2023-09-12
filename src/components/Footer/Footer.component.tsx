import React from 'react';
import {FooterProps} from './Footer.types';
import {FooterContainer} from './Footer.styles';
import {Button} from 'components/Button/Button.component';

export const Footer = ({
  primaryButtonText,
  primaryButtonOnPress,
  secondaryButtonOnPress,
  secondaryButtonText,
}: FooterProps): JSX.Element => {
  return (
    <FooterContainer>
      <Button
        variant="primary"
        onPress={primaryButtonOnPress}
        title={primaryButtonText}
      />
      {secondaryButtonText && secondaryButtonOnPress && (
        <Button
          variant="secondary"
          title={secondaryButtonText}
          onPress={secondaryButtonOnPress}
        />
      )}
    </FooterContainer>
  );
};
