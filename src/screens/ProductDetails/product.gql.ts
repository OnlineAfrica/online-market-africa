import {gql} from '@apollo/client';

export const GET_PRODUCT = gql`
  query Product($id: ID!) {
    product(id: $id) {
      id
      title
      price
      images
      rating
      description
    }
  }
`;
