import React from 'react';
import {FooterProps} from './Footer.types';
import {
  ButtonContainer,
  FooterContainer,
  IconContainer,
  PrimaryButtonContainer,
} from './Footer.styles';
import {Button} from 'components/Button/Button.component';

export const Footer = ({
  primaryButtonText,
  primaryButtonOnPress,
  secondaryButtonOnPress,
  secondaryButtonText,
  icon,
  onIconPress,
}: FooterProps): JSX.Element => {
  return (
    <FooterContainer>
      {icon ? (
        <PrimaryButtonContainer>
          <ButtonContainer>
            <Button
              variant="primary"
              onPress={primaryButtonOnPress}
              title={primaryButtonText}
            />
          </ButtonContainer>
          <IconContainer onPress={onIconPress}>{icon}</IconContainer>
        </PrimaryButtonContainer>
      ) : (
        <Button
          variant="primary"
          onPress={primaryButtonOnPress}
          title={primaryButtonText}
        />
      )}
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
