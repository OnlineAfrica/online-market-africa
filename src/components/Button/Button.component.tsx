import React, {useMemo} from 'react';
import {Typography} from 'components/Typography/Typography.component';
import {ButtonProps} from './Button.types';
import {ButtonContainer, ContentContainer} from './Button.styles';
import {useTheme} from 'styled-components/native';

export const Button = ({
  title,
  onPress,
  rightIcon,
  variant,
}: ButtonProps): JSX.Element => {
  const theme = useTheme();

  const underlayColor = useMemo(() => {
    switch (variant) {
      case 'primary':
        return theme.colors.background.buttonPressedPrimary;
      case 'accent':
        return;
      case 'secondary':
        return theme.colors.background.buttonPressedSecondary;
      default:
        return;
    }
  }, [theme, variant]);

  const textVariant = useMemo(() => {
    switch (variant) {
      case 'primary' || 'secondary':
        return 'body1';
      case 'accent':
        return 'accent';
      default:
        return 'body1';
    }
  }, [variant]);

  return (
    <ButtonContainer
      underlayColor={underlayColor}
      onPress={onPress}
      variant={variant}>
      <ContentContainer>
        <Typography variant={textVariant}>{title}</Typography>
        {rightIcon && rightIcon}
      </ContentContainer>
    </ButtonContainer>
  );
};
