import React from 'react';
import {Container, ProductCardContainer, StyleableImage} from './Home.styles';
import {SectionHeader} from 'components/SectionHeader/SectionHeader.component';
import lang from 'utils/language/en.json';
import {ProductCard} from 'components/ProductCard/ProductCard.component';
import {FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {HomeNavigatorRouting, HomeStackParamList} from 'routing/routing.types';
import {useProducts} from './useProducts';
import {Product} from 'generated/types';

export const Home = () => {
  const {products} = useProducts();

  const navigation = useNavigation<HomeStackParamList>();

  const handleProductNavigation = (id: string) => {
    return navigation.navigate(HomeNavigatorRouting.ProductDetails, {id});
  };

  const renderProductData = ({item}: {item: Product}) => {
    return (
      <ProductCardContainer>
        <ProductCard
          onPress={() => handleProductNavigation(item.id)}
          imageUrl={item.images[0]}
          rating={item.rating?.toString()}
          title={item.title}
          price={item.price.toString()}
        />
      </ProductCardContainer>
    );
  };

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
