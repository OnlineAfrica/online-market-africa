import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {Product} from 'generated/types';

export interface CartProduct extends Product {
  quantity: number;
}

export type WishListTypes = {
  wishlistItems: Product[];
  toggleWishListItem: (product: Product) => void;
};

export type CartItemsType = {
  cartItems: CartProduct[];
  addItemToCart: (product: CartProduct) => void;
  removeItemFromCart: (product: CartProduct) => void;
  clearCart: () => void;
};

export type AccountDetailsType = {
  user: FirebaseAuthTypes.User | null;
};

export type AppContextTypes = WishListTypes & CartItemsType;
