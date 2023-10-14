import {ApolloError} from '@apollo/client';
import {useProductsQuery} from './products.gql.g';
import {Product} from 'generated/types';

export const useProducts = (): {
  products: Product[] | undefined;
  loading: boolean;
  error: ApolloError | undefined;
} => {
  const {data, loading, error} = useProductsQuery({
    fetchPolicy: 'cache-and-network',
  });

  return {
    products: data?.products as Product[],
    loading,
    error,
  };
};
