import {Product} from 'generated/types';
import {useProductQuery} from './product.gql.g';
import {ApolloError} from '@apollo/client';

export const useProduct = (
  id: string,
): {
  product?: Product;
  loading: boolean;
  error?: ApolloError;
} => {
  const {data, loading, error} = useProductQuery({
    variables: {
      id,
    },
    fetchPolicy: 'cache-and-network',
  });

  return {
    product: data?.product,
    loading,
    error,
  };
};
