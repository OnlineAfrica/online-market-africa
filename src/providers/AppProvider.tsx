import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {
  // AccountDetailsType,
  AppContextTypes,
  CartProduct,
} from './AppProvider.types';
import {Product} from 'generated/types';
import {
  STORAGE_KEYS,
  getItem,
  storeItem,
} from 'services/AsyncStorage/localStorage';
// import auth from '@react-native-firebase/auth';

export const AppContext = createContext<AppContextTypes>({} as AppContextTypes);

export const AppProvider = ({children}: {children: React.ReactNode}) => {
  const [wishlistItems, setWishlistItems] = useState<Product[]>([]);
  const [cartItems, setCartItems] = useState<CartProduct[]>([]);
  // const [accountDetails, setAccountDetails] = useState<AccountDetailsType>({
  //   user: null,
  // });

  // const user = auth().currentUser;

  const toggleWishListItem = useCallback(async (product: Product) => {
    let storedItems = await getItem<Product[]>(STORAGE_KEYS.WISHLIST_ITEMS);
    if (!storedItems || storedItems.length === 0) {
      storedItems = [];
      storedItems.push(product);
      setWishlistItems(storedItems);
      await storeItem(STORAGE_KEYS.WISHLIST_ITEMS, storedItems);
    } else {
      const isItemInWishList = storedItems.find(item => item.id === product.id);
      if (isItemInWishList) {
        const newWishlistArray = storedItems.filter(
          item => product.id !== item.id,
        );
        setWishlistItems(newWishlistArray);
        await storeItem(STORAGE_KEYS.WISHLIST_ITEMS, newWishlistArray);
      } else {
        setWishlistItems([...storedItems, product]);
        await storeItem(STORAGE_KEYS.WISHLIST_ITEMS, [...storedItems, product]);
      }
    }
  }, []);

  const addItemToCart = useCallback(async (product: CartProduct) => {
    let storedItems = await getItem<CartProduct[]>(STORAGE_KEYS.CART_ITEMS);
    if (!storedItems || storedItems.length === 0) {
      storedItems = [];
      storedItems.push({...product, quantity: 1});
      setCartItems(storedItems);
      await storeItem(STORAGE_KEYS.CART_ITEMS, storedItems);
    } else {
      const isItemInCart = storedItems.find(item => item.id === product.id);
      if (isItemInCart) {
        const cartItem = storedItems.map(p =>
          p.id === product.id ? {...p, quantity: p.quantity + 1} : p,
        );
        console.log(cartItem);
        setCartItems(cartItem);
        await storeItem(STORAGE_KEYS.CART_ITEMS, cartItem);
      } else {
        setCartItems([...storedItems, {...product, quantity: 1}]);
        await storeItem(STORAGE_KEYS.CART_ITEMS, [
          ...storedItems,
          {...product, quantity: 1},
        ]);
      }
    }
  }, []);

  const removeItemFromCart = useCallback(async (product: CartProduct) => {
    const storedItems = await getItem<CartProduct[]>(STORAGE_KEYS.CART_ITEMS);
    const cartItemToRemove = storedItems?.find(prd => prd.id === product.id);
    if (cartItemToRemove?.quantity === 1) {
      const newCartItemArray = storedItems?.filter(
        prd => prd.id !== product.id,
      )!;
      setCartItems(newCartItemArray);
      await storeItem(STORAGE_KEYS.CART_ITEMS, newCartItemArray);
    } else {
      const cartItem = storedItems?.map(item =>
        item.id === product.id ? {...item, quantity: item.quantity - 1} : item,
      )!;
      setCartItems(cartItem);
      await storeItem(STORAGE_KEYS.CART_ITEMS, cartItem);
    }
  }, []);

  const clearCart = useCallback(async () => {
    setCartItems([]);
    await storeItem(STORAGE_KEYS.CART_ITEMS, []);
  }, []);

  useEffect(() => {
    const getWishListItems = async () => {
      const storedItems = await getItem<Product[]>(STORAGE_KEYS.WISHLIST_ITEMS);
      if (storedItems) {
        setWishlistItems(storedItems);
      }
    };

    // eslint-disable-next-line no-void
    void getWishListItems();
  }, []);

  useEffect(() => {
    const getCartItems = async () => {
      const storedItems = await getItem<CartProduct[]>(STORAGE_KEYS.CART_ITEMS);
      if (storedItems) {
        setCartItems(storedItems);
      }
    };

    // eslint-disable-next-line no-void
    void getCartItems();
  }, []);

  const providerValues = useMemo(() => {
    return {
      wishlistItems,
      toggleWishListItem,
      addItemToCart,
      removeItemFromCart,
      clearCart,
      cartItems,
    };
  }, [
    addItemToCart,
    cartItems,
    clearCart,
    removeItemFromCart,
    toggleWishListItem,
    wishlistItems,
  ]);
  return (
    <AppContext.Provider value={providerValues}>{children}</AppContext.Provider>
  );
};
