import {StackScreenProps} from '@react-navigation/stack';
import {HomeNavigatorRouting, HomeStack} from 'routing/routing.types';

export interface ProductDetailsProps {
  route: StackScreenProps<
    HomeStack,
    HomeNavigatorRouting.ProductDetails
  >['route'];
}
