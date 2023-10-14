import {gql} from '@apollo/client';

export const CATEGORIES_QUERY = gql`
  query Categories {
    categories {
      id
      title
      type
    }
  }
`;
