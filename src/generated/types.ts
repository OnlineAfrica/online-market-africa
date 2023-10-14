export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends {[key: string]: unknown}> = {[K in keyof T]: T[K]};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<T extends {[key: string]: unknown}, K extends keyof T> = {
  [_ in K]?: never;
};
export type Incremental<T> =
  | T
  | {[P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: {input: string; output: string};
  String: {input: string; output: string};
  Boolean: {input: boolean; output: boolean};
  Int: {input: number; output: number};
  Float: {input: number; output: number};
};

export enum Categories {
  Appliances = 'Appliances',
  Books = 'Books',
  Clothing = 'Clothing',
  Electronics = 'Electronics',
  FoodAndBeverage = 'FoodAndBeverage',
  FurnitureAndDecor = 'FurnitureAndDecor',
  Miscellaneous = 'Miscellaneous',
  Pets = 'Pets',
  Toys = 'Toys',
}

export type Category = {
  __typename?: 'Category';
  id: Scalars['ID']['output'];
  specifics?: Maybe<CategorySpecifics>;
  title: Scalars['String']['output'];
  type: Categories;
};

export type CategorySpecifics = {
  __typename?: 'CategorySpecifics';
  brand?: Maybe<Scalars['String']['output']>;
  color?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  size?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  warranty?: Maybe<Scalars['String']['output']>;
};

export type Product = {
  __typename?: 'Product';
  category: Category;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  images: Array<Scalars['String']['output']>;
  price: Scalars['Float']['output'];
  rating: Scalars['Float']['output'];
  stock: Scalars['Int']['output'];
  title: Scalars['String']['output'];
  vendor: Vendor;
};

export type Query = {
  __typename?: 'Query';
  categories: Array<Category>;
  product: Product;
  products: Array<Product>;
};

export type QueryProductArgs = {
  id: Scalars['ID']['input'];
};

export type Vendor = {
  __typename?: 'Vendor';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};
