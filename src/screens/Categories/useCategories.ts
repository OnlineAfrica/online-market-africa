import {Category} from 'generated/types';
import {useCategoriesQuery} from './categories.gql.g';
import {ApolloError} from '@apollo/client';

export const useCategories = (): {
  categoryData: Category[] | undefined;
  loading: boolean;
  error: ApolloError | undefined;
} => {
  const {data, loading, error} = useCategoriesQuery();

  return {
    categoryData: data?.categories as Category[],
    loading,
    error,
  };
};
