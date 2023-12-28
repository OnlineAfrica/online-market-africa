import React from 'react';
import {
  ButtonContainer,
  ContentContainer,
  Divider,
  FooterContainer,
  ItemRowContainer,
  TotalContainer,
} from './PaymentFooter.styles';
import {Typography} from 'components/Typography/Typography.component';
import {PaymentFooterProps} from './PaymentFooter.types';
import {Button} from 'components/Button/Button.component';

export const PaymentFooter = ({
  total,
  deliveryFee = 0,
  onPress,
}: PaymentFooterProps) => {
  const totalFee = total + deliveryFee;
  return (
    <FooterContainer>
      <ContentContainer>
        <ItemRowContainer>
          <Typography variant="body2">Total</Typography>
          <Typography variant="body2">R {total.toString()}</Typography>
        </ItemRowContainer>
        <ItemRowContainer>
          <Typography variant="body2">Delivery fee</Typography>
          <Typography variant="body2">
            {deliveryFee ? (deliveryFee === 0 ? '-' : `R ${deliveryFee}`) : '-'}
          </Typography>
        </ItemRowContainer>
        <Divider />
        <TotalContainer>
          <Typography variant="title">Total to pay</Typography>
          <Typography variant="title">
            R {totalFee.toFixed(2).toString()}
          </Typography>
        </TotalContainer>
      </ContentContainer>

      <ButtonContainer>
        <Button title="Pay now" variant="primary" onPress={onPress} />
      </ButtonContainer>
    </FooterContainer>
  );
};
