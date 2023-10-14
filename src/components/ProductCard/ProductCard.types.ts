export type ProductCardVariant = 'main' | 'secondary';

export interface ProductCardProps {
  title: string;
  imageUrl: string;
  price: string;
  rating?: string;
  onPress: () => void;
  onHandleLikePress?: () => void;
  variant?: ProductCardVariant;
  isLikeable?: boolean;
  isLiked?: boolean;
  isFirst?: boolean;
  isLast?: boolean;
}
