import {Category, Product} from '../generated/schema';
import productData from '../data/products.json';
import categoriesData from '../data/categories.json';

const products: Product[] = productData as Product[];

const categories: Category[] = categoriesData as Category[];

const resolvers = {
  Query: {
    products: () => products,
    product: (_index: any, {id}: {id: string}) =>
      products.find(product => product.id === id),
    categories: () => categories,
  },
};

export default resolvers;
