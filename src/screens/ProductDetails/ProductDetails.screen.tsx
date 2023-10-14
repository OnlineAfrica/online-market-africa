import React, {useState} from 'react';
import {
  Container,
  ImageContainer,
  PriceContainer,
  RatingContainer,
  ScollableContentContainer,
  StyledImage,
} from './ProductDetails.styles';
import {Typography} from 'components/Typography/Typography.component';
import {ProductDetailsProps} from './ProductDetails.types';
import {useProduct} from './useProduct';
import {ContentContainer} from 'components/ContentContainer/ContentContainer.component';
import {Footer} from 'components/Footer/Footer.component';
import {useAppContext} from 'providers/useAppContext';
import {CartProduct} from 'providers/AppProvider.types';
import {Button} from 'components/Button/Button.component';
import StarOutline from '../../assets/icons/star-outline.svg';
import {useTheme} from 'styled-components/native';
import Heart from '../../assets/icons/heart.svg';
import HeartOutline from '../../assets/icons/heart-outline.svg';

export const ProductDetails = ({route}: ProductDetailsProps) => {
  const {id} = route.params;

  const [isShowMore, setIsShowMore] = useState(false);
  const {addItemToCart, toggleWishListItem, wishlistItems} = useAppContext();

  const theme = useTheme();
  const {product, loading, error} = useProduct(id);

  const isLiked = wishlistItems.find(prd => prd.id === product?.id);
  if (!product || error) {
    return;
  }

  if (!product) {
    return;
  }

  if (loading) {
    return;
  }

  return (
    <Container>
      <ScollableContentContainer showsVerticalScrollIndicator={false}>
        <ImageContainer>
          <StyledImage
            resizeMode={'contain'}
            source={{uri: product.images[0]}}
          />
        </ImageContainer>
        <ContentContainer>
          <Typography variant="title">{product.title}</Typography>
          <PriceContainer>
            <Typography variant="body1">
              R {product.price.toString()}
            </Typography>
            <RatingContainer>
              <StarOutline
                width={26}
                height={26}
                color={theme.colors.foreground.star}
              />
              <Typography variant="body3">
                {product.rating.toString() === '0' || !product.rating
                  ? 'No Reviews yet'
                  : product.rating.toString()}
              </Typography>
            </RatingContainer>
          </PriceContainer>
        </ContentContainer>
        {product.description && (
          <ContentContainer>
            <Typography variant="title">Description</Typography>
            <Typography numberOfLines={!isShowMore ? 4 : 0} variant="body2">
              {product.description}
            </Typography>
            <Button
              onPress={() => setIsShowMore(!isShowMore)}
              title={isShowMore ? 'Show less' : 'Show more'}
              variant="accent"
            />
          </ContentContainer>
        )}
      </ScollableContentContainer>
      <Footer
        icon={
          isLiked ? (
            <Heart width={29} height={29} />
          ) : (
            <HeartOutline width={30} height={30} />
          )
        }
        onIconPress={() => toggleWishListItem(product)}
        primaryButtonText="Add to Cart"
        primaryButtonOnPress={() => addItemToCart(product as CartProduct)}
      />
    </Container>
  );
};
