import React from 'react';
import {Container} from './Cart.styles';
import {useAppContext} from 'providers/useAppContext';
import {CartProduct} from 'providers/AppProvider.types';
import {FlatList} from 'react-native';
import {MessageView} from 'components/MessageView/MessageView.component';
import {useNavigation} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {AppTabParamList, TabScreenNames} from 'routing/routing.types';
import {ProductCard} from 'components/ProductCard/ProductCard.component';

export const Cart = () => {
  const {cartItems, removeItemFromCart} = useAppContext();
  const navigation = useNavigation<BottomTabNavigationProp<AppTabParamList>>();

  const renderItem = ({item}: {item: CartProduct}) => {
    return (
      <ProductCard
        isLikeable={false}
        variant="secondary"
        isLast
        title={item.title}
        imageUrl={item.images[0]}
        price={item.price.toString()}
        onPress={() => removeItemFromCart(item)}
        rating={item.rating.toString()}
      />
    );
  };
  const handleHomeNavigation = () => {
    navigation.navigate(TabScreenNames.Home);
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
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </Container>
  );
};
