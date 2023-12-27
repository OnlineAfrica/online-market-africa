import React, {useRef} from 'react';
import {
  AddToCartCTAContainer,
  CartIconContainer,
  Container,
  RemoveFromCartCTAContainer,
} from './Cart.styles';
import {useAppContext} from 'providers/useAppContext';
import {CartProduct} from 'providers/AppProvider.types';
import {FlatList} from 'react-native';
import {MessageView} from 'components/MessageView/MessageView.component';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {
  AppStackParamList,
  ScreenNames,
  TabScreenNames,
} from 'routing/routing.types';
import {ProductCard} from 'components/ProductCard/ProductCard.component';
import {PaymentFooter} from 'components/PaymentFooter/PaymentFooter.component';
import {Typography} from 'components/Typography/Typography.component';
import ArrowLeft from 'assets/icons/arrow-left.svg';
import ArrowRight from 'assets/icons/arrow-right.svg';
import {useTheme} from 'styled-components/native';
import {Paystack, paystackProps} from 'react-native-paystack-webview';
import Config from 'react-native-config';

export const Cart = () => {
  const paystackWebViewRef = useRef<paystackProps.PayStackRef>();
  const deliveryFee = 99.99;
  const {cartItems, getCartTotal, removeItemFromCart, addItemToCart} =
    useAppContext();
  const navigation = useNavigation<NavigationProp<AppStackParamList>>();

  const theme = useTheme();

  const renderCartIcon = (item: CartProduct) => {
    return (
      <CartIconContainer>
        <RemoveFromCartCTAContainer onPress={() => removeItemFromCart(item)}>
          <ArrowLeft
            width={theme.spacing.l}
            height={theme.spacing.l}
            color={theme.colors.background.buttonPrimary}
          />
        </RemoveFromCartCTAContainer>
        <Typography variant="body1">{item.quantity.toString()}</Typography>
        <AddToCartCTAContainer onPress={() => addItemToCart(item)}>
          <ArrowRight
            width={theme.spacing.l}
            height={theme.spacing.l}
            color={theme.colors.background.buttonPrimary}
          />
        </AddToCartCTAContainer>
      </CartIconContainer>
    );
  };

  const renderItem = ({item}: {item: CartProduct}) => {
    return (
      <ProductCard
        isLikeable={false}
        variant="secondary"
        isLast
        title={item.title}
        imageUrl={item.images[0]}
        price={item.price.toFixed(2).toString()}
        onPress={() =>
          navigation.navigate(ScreenNames.ProductDetails, {
            id: item.id,
            title: item.title,
          })
        }
        rating={item.rating.toString()}
        cartComponent={renderCartIcon(item)}
      />
    );
  };
  const handleHomeNavigation = () => {
    navigation.navigate(ScreenNames.AppTabs, {
      screen: TabScreenNames.Home,
    });
  };
  const keyExtractor = (item: CartProduct) => item.id;

  if (!cartItems || !cartItems.length) {
    return (
      <MessageView
        title="Your cart is currently empty."
        subtitle="Continue shopping and add some items to your cart."
        ctaTitle="Continue shopping"
        onPress={handleHomeNavigation}
      />
    );
  }

  return (
    <Container>
      <Paystack
        paystackKey={Config.PAYMENT_PUBLIC_KEY ?? ''}
        amount={getCartTotal + deliveryFee}
        billingEmail="michael@nfaonline.co.za"
        currency="ZAR"
        activityIndicatorColor="transparent"
        channels={['bank', 'card']}
        onCancel={() => paystackWebViewRef.current?.endTransaction()}
        onSuccess={res => console.log(res)}
        ref={paystackWebViewRef as React.MutableRefObject<undefined>}
      />
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
      <PaymentFooter
        total={getCartTotal}
        deliveryFee={deliveryFee}
        onPress={() => paystackWebViewRef.current?.startTransaction()}
      />
    </Container>
  );
};
