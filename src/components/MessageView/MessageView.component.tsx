import React from 'react';
import {
  CTAContainer,
  Container,
  IconContainer,
  SubtitleContainer,
} from './MessageView.styles';
import {Typography} from 'components/Typography/Typography.component';
import {MessageViewProps} from './MessageView.types';
import {Button} from 'components/Button/Button.component';
import EmptyCart from 'assets/icons/empty-cart.svg';
import {useTheme} from 'styled-components/native';

export const MessageView = ({
  title,
  subtitle,
  ctaTitle,
  onPress,
}: MessageViewProps): JSX.Element => {
  const theme = useTheme();
  return (
    <Container>
      <IconContainer>
        <EmptyCart
          color={theme.colors.background.buttonAccent}
          width={100}
          height={100}
        />
      </IconContainer>
      <Typography align="center" variant="title">
        {title}
      </Typography>
      {subtitle && (
        <SubtitleContainer>
          <Typography align="center" variant="body2">
            {subtitle}
          </Typography>
        </SubtitleContainer>
      )}
      {ctaTitle && onPress && (
        <CTAContainer>
          <Button title={ctaTitle} variant="secondary" onPress={onPress} />
        </CTAContainer>
      )}
    </Container>
  );
};
