import React from 'react';
import {
  Container,
  ImageContainer,
  ScollableContentContainer,
  StyledImage,
} from './ProductDetails.styles';
import {Typography} from 'components/Typography/Typography.component';
import {ProductDetailsProps} from './ProductDetails.types';
import {useProduct} from './useProduct';
import {ContentContainer} from 'components/ContentContainer/ContentContainer.component';
import {useTheme} from 'styled-components/native';
import {Footer} from 'components/Footer/Footer.component';

export const ProductDetails = ({route}: ProductDetailsProps) => {
  const {id} = route.params;

  const theme = useTheme();

  const {product, loading, error} = useProduct(id);

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
        <ContentContainer backgroundColor={theme.colors.background.accent}>
          <Typography variant="body1">{product.title}</Typography>
          <Typography variant="body1">R {product.price.toString()}</Typography>
        </ContentContainer>
        {product.description && (
          <ContentContainer backgroundColor={theme.colors.background.accent}>
            <Typography variant="body2">{product.description}</Typography>
          </ContentContainer>
        )}
      </ScollableContentContainer>
      <Footer primaryButtonText="Add to Cart" primaryButtonOnPress={() => {}} />
    </Container>
  );
};
