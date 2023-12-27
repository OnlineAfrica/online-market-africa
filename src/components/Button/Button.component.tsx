import React, {useMemo} from 'react';
import {Typography} from 'components/Typography/Typography.component';
import {ButtonProps} from './Button.types';
import {ButtonContainer, ContentContainer} from './Button.styles';
import {useTheme} from 'styled-components/native';
import {VariantType} from 'components/Typography/Typography.types';

export const Button = ({
  title,
  onPress,
  rightIcon,
  isDisabled = false,
  variant,
}: ButtonProps): JSX.Element => {
  const theme = useTheme();

  const underlayColor = useMemo(() => {
    switch (variant) {
      case 'primary':
        return theme.colors.background.buttonPressedPrimary;
      case 'secondary':
        return theme.colors.background.buttonPressedSecondary;
      default:
        return theme.colors.background.transparent;
    }
  }, [theme, variant]);

  const textVariant: VariantType = useMemo(() => {
    switch (variant) {
      case 'primary' || 'accent':
        return 'light';
      case 'secondary':
        return 'button';
      case 'accent':
        return 'button';
      default:
        return 'body1';
    }
  }, [variant]);

  return (
    <ButtonContainer
      isDisabled={isDisabled}
      underlayColor={underlayColor}
      disabled={isDisabled}
      onPress={onPress}
      variant={variant}>
      <ContentContainer>
        <Typography variant={textVariant}>{title}</Typography>
        {rightIcon && rightIcon}
      </ContentContainer>
    </ButtonContainer>
  );
};
