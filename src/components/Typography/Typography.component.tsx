import React, {useMemo} from 'react';
import {Container} from './Typography.styles';
import {TypographyTypes} from './Typography.types';
import {useTheme} from 'styled-components/native';

export const Typography = ({
  children,
  variant,
  testId = 'text',
}: TypographyTypes): JSX.Element => {
  const theme = useTheme();

  const TextVariant = useMemo(() => {
    switch (variant) {
      case 'body1':
        return theme.font.variant.body1;
      case 'body2':
        return theme.font.variant.body2;
      case 'body3':
        return theme.font.variant.body3;
      case 'accent':
        return theme.font.variant.accent;
      case 'heading':
        return theme.font.variant.heading;
      case 'subtitle':
        return theme.font.variant.subtitle;
      default:
        return theme.font.variant.body1;
    }
  }, [variant, theme]);

  return (
    <Container testID={testId}>
      <TextVariant>{children}</TextVariant>
    </Container>
  );
};
