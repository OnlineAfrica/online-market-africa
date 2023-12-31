import React, {useMemo} from 'react';
import {Container, LoadingContainer} from './Typography.styles';
import {TypographyTypes} from './Typography.types';
import {useTheme} from 'styled-components/native';
import {LoadingShimmers} from 'components/LoadingShimmers/LoadingShimmers.component';

export const Typography = ({
  children,
  variant,
  testId = 'text',
  loading = false,
  align = 'auto',
  ...rest
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
      case 'title':
        return theme.font.variant.title;
      case 'light':
        return theme.font.variant.light;
      case 'button':
        return theme.font.variant.button;
      case 'danger':
        return theme.font.variant.dangerText;
      default:
        return theme.font.variant.body1;
    }
  }, [variant, theme]);

  if (loading) {
    return (
      <LoadingShimmers>
        <LoadingContainer />
      </LoadingShimmers>
    );
  }

  return (
    <Container testID={testId}>
      <TextVariant style={{textAlign: align}} {...rest}>
        {children}
      </TextVariant>
    </Container>
  );
};
