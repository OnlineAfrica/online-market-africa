import AsyncStorage from '@react-native-async-storage/async-storage';

export enum STORAGE_KEYS {
  WISHLIST_ITEMS = 'WISHLIST_ITEMS',
  CART_ITEMS = 'CART_ITEMS',
}

export const getItem = async <T>(
  item: STORAGE_KEYS,
): Promise<T | undefined> => {
  const savedValue = await AsyncStorage.getItem(item);
  return savedValue ? (JSON.parse(savedValue) as T) : undefined;
};

export const storeItem = async <T>(
  item: STORAGE_KEYS,
  value: T,
): Promise<void> => {
  await AsyncStorage.setItem(item, JSON.stringify(value));
};
