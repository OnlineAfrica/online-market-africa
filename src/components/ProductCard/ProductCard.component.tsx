import React, {useCallback, useState} from 'react';
import {
  ContentContainer,
  IconContainer,
  PressableContainer,
  PressableSecondaryContainer,
  RatingContainer,
  ContentSecondaryContainer,
  StyledImage,
  StyledImageContainer,
  StyledSecondaryImage,
  StyledSecondaryImageContainer,
  CartIconContainer,
} from './ProductCard.styles';
import {Typography} from 'components/Typography/Typography.component';
import {ProductCardProps} from './ProductCard.types';
import StarOutline from '../../assets/icons/star-outline.svg';
import {useTheme} from 'styled-components/native';
import Heart from '../../assets/icons/heart.svg';
import HeartOutline from '../../assets/icons/heart-outline.svg';
import {LoadingShimmers} from 'components/LoadingShimmers/LoadingShimmers.component';

export const ProductCard = ({
  imageUrl,
  price,
  rating,
  title,
  onPress,
  onHandleLikePress,
  variant = 'main',
  isLiked,
  loading = false,
  isLikeable = true,
  isFirst = false,
  isLast = false,
  cartComponent,
}: ProductCardProps): JSX.Element => {
  const theme = useTheme();

  const [isLoading, setIsLoading] = useState(true);

  const handleOnLoadStart = useCallback(() => {
    setIsLoading(true);
  }, []);

  const handleOnLoadEnd = useCallback(() => {
    setIsLoading(false);
  }, []);

  if (variant === 'secondary') {
    return (
      <PressableSecondaryContainer
        isFirst={isFirst}
        isLast={isLast}
        onPress={onPress}>
        <StyledSecondaryImageContainer>
          <StyledSecondaryImage source={{uri: imageUrl}} />
        </StyledSecondaryImageContainer>
        <ContentSecondaryContainer>
          <Typography variant="title" loading={loading}>
            {title}
          </Typography>
          <Typography variant="subtitle" loading={loading}>
            R {price}
          </Typography>
          <RatingContainer>
            <StarOutline
              width={26}
              height={26}
              color={theme.colors.foreground.star}
            />
            <Typography variant="body3" loading={loading}>
              {rating === '0' || !rating ? 'No Reviews yet' : rating}
            </Typography>
          </RatingContainer>
        </ContentSecondaryContainer>
        {cartComponent && (
          <CartIconContainer>{cartComponent}</CartIconContainer>
        )}
        <IconContainer onPress={onHandleLikePress}>
          {isLikeable ? (
            isLiked ? (
              <Heart width={29} height={29} />
            ) : (
              <HeartOutline width={30} height={30} />
            )
          ) : null}
        </IconContainer>
      </PressableSecondaryContainer>
    );
  }

  return (
    <PressableContainer
      onPress={onPress}
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        shadowColor: '#000',
        shadowRadius: 2,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.16,
        elevation: 4,
      }}>
      <StyledImageContainer>
        {!isLoading ? (
          <>
            <IconContainer onPress={onHandleLikePress}>
              {isLiked ? (
                <Heart width={29} height={29} />
              ) : (
                <HeartOutline width={30} height={30} />
              )}
            </IconContainer>
            <StyledImage source={{uri: imageUrl}} />
          </>
        ) : (
          <LoadingShimmers>
            <StyledImage
              onLoadStart={handleOnLoadStart}
              onLoadEnd={handleOnLoadEnd}
              source={{uri: imageUrl}}
            />
          </LoadingShimmers>
        )}
      </StyledImageContainer>

      <ContentContainer>
        <Typography variant="title" loading={loading}>
          {title}
        </Typography>
        <Typography variant="body2" loading={loading}>
          R{price}
        </Typography>
        <RatingContainer>
          <StarOutline
            width={26}
            height={26}
            color={theme.colors.foreground.star}
          />
          <Typography variant="body3" loading={loading}>
            {rating === '0' || !rating ? 'No Reviews yet' : rating}
          </Typography>
        </RatingContainer>
      </ContentContainer>
    </PressableContainer>
  );
};
