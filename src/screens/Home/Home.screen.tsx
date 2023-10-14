import React from 'react';
import {Container, ProductCardContainer, StyleableImage} from './Home.styles';
import {SectionHeader} from 'components/SectionHeader/SectionHeader.component';
import lang from 'utils/language/en.json';
import {ProductCard} from 'components/ProductCard/ProductCard.component';
import {FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AppStackParamList, ScreenNames} from 'routing/routing.types';
import {useProducts} from './useProducts';
import {Product} from 'generated/types';
import {useAppContext} from 'providers/useAppContext';
import {StackNavigationProp} from '@react-navigation/stack';

export const Home = () => {
  const {products} = useProducts();

  const navigation = useNavigation<StackNavigationProp<AppStackParamList>>();

  const {toggleWishListItem, wishlistItems} = useAppContext();

  const handleProductNavigation = (id: string, title: string) => {
    return navigation.navigate(ScreenNames.ProductDetails, {
      id,
      title,
    });
  };

  const renderProductData = ({item}: {item: Product}) => {
    return (
      <ProductCardContainer>
        <ProductCard
          onPress={() => handleProductNavigation(item.id, item.title)}
          imageUrl={item.images[0]}
          rating={item.rating?.toString()}
          isLiked={wishlistItems.find(prd => prd.id === item.id) ? true : false}
          onHandleLikePress={() => toggleWishListItem(item)}
          title={item.title}
          price={item.price.toString()}
        />
      </ProductCardContainer>
    );
  };

  if (!products || products.length === 0) {
    return <></>;
  }

  return (
    <Container showsVerticalScrollIndicator={false}>
      <StyleableImage
        source={require('../../assets/images/shop-banner.jpeg')}
      />
      <SectionHeader
        title={lang.home.recomended}
        buttonTitle={lang.home.seeAll}
      />
      <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={renderProductData}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <SectionHeader
        title={lang.home.whatsHot}
        buttonTitle={lang.home.seeAll}
      />
      <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={renderProductData}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <SectionHeader
        title={lang.home.promotions}
        buttonTitle={lang.home.seeAll}
      />
      <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={renderProductData}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </Container>
  );
};
