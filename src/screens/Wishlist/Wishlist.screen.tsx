import React from 'react';
import {Container} from './Wishlist.styles';
import {useAppContext} from 'providers/useAppContext';
import {FlatList} from 'react-native';
import {Product} from 'generated/types';
import {ProductCard} from 'components/ProductCard/ProductCard.component';
import {MessageView} from 'components/MessageView/MessageView.component';
import {useNavigation} from '@react-navigation/native';
import {
  AppStackParamList,
  ScreenNames,
  TabScreenNames,
} from 'routing/routing.types';
import {StackNavigationProp} from '@react-navigation/stack';

export const Wishlist = () => {
  const {wishlistItems, toggleWishListItem} = useAppContext();
  const navigation = useNavigation<StackNavigationProp<AppStackParamList>>();

  const renderItem = ({item}: {item: Product}) => {
    return (
      <ProductCard
        variant="secondary"
        isLast
        title={item.title}
        imageUrl={item.images[0]}
        price={item.price.toString()}
        onPress={() =>
          navigation.navigate(ScreenNames.ProductDetails, {
            id: item.id,
            title: item.title,
          })
        }
        isLiked={wishlistItems.find(prd => prd.id === item.id) ? true : false}
        onHandleLikePress={() => toggleWishListItem(item)}
        rating={item.rating.toString()}
      />
    );
  };

  const handleHomeNavigation = () => {
    navigation.navigate(ScreenNames.AppTabs, {
      screen: TabScreenNames.Home,
    });
  };

  const keyExtractor = (item: Product) => item.id;

  if (!wishlistItems || !wishlistItems.length) {
    return (
      <MessageView
        title="Your wishlist is currently empty."
        subtitle="Continue shopping and add some items to your wishlist."
        ctaTitle="Continue shopping"
        onPress={handleHomeNavigation}
      />
    );
  }
  return (
    <Container>
      <FlatList
        data={wishlistItems}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </Container>
  );
};
