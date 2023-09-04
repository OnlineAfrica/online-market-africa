import * as Types from '../../generated/types';

import {gql} from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type ProductQueryVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
}>;

export type ProductQuery = {
  __typename?: 'Query';
  product: {
    __typename?: 'Product';
    id: string;
    title: string;
    price: number;
    images: Array<string>;
    rating: number;
  };
};

export const ProductDocument = gql`
  query Product($id: ID!) {
    product(id: $id) {
      id
      title
      price
      images
      rating
    }
  }
`;

/**
 * __useProductQuery__
 *
 * To run a query within a React component, call `useProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProductQuery(
  baseOptions: Apollo.QueryHookOptions<ProductQuery, ProductQueryVariables>,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useQuery<ProductQuery, ProductQueryVariables>(
    ProductDocument,
    options,
  );
}
export function useProductLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ProductQuery,
    ProductQueryVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useLazyQuery<ProductQuery, ProductQueryVariables>(
    ProductDocument,
    options,
  );
}
export type ProductQueryHookResult = ReturnType<typeof useProductQuery>;
export type ProductLazyQueryHookResult = ReturnType<typeof useProductLazyQuery>;
export type ProductQueryResult = Apollo.QueryResult<
  ProductQuery,
  ProductQueryVariables
>;
