import {ApolloClient, InMemoryCache} from '@apollo/client';
import {Platform} from 'react-native';

const client = new ApolloClient({
  uri:
    Platform.OS === 'ios'
      ? 'http://localhost:4000/graphql'
      : 'http://10.0.2.2:4000/graphql',
  cache: new InMemoryCache(),
});

export default client;
