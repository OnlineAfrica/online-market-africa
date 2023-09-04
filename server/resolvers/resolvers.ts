import {Product} from '../generated/schema';
import productData from '../data/products.json';

const products: Product[] = productData;

const resolvers = {
  Query: {
    products: () => products,
    product: (_index: any, {id}: {id: string}) =>
      products.find(product => product.id === id),
  },
};

export default resolvers;
