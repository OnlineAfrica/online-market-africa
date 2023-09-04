import express from 'express';
import {ApolloServer, gql} from 'apollo-server-express';
import resolvers from './resolvers/resolvers';

// eslint-disable-next-line @typescript-eslint/no-shadow
const startApolloServer = async (resolvers: any) => {
  const typeDefs = gql`
    ${require('fs').readFileSync(
      require.resolve('./schema/schema.graphql'),
      'utf8',
    )}
  `;

  const server = new ApolloServer({typeDefs, resolvers});

  const app = express();

  await server.start();

  server.applyMiddleware({app});

  const PORT = process.env.PORT || 4000;

  app.listen(PORT, () => {
    console.log('');
    console.log(`Running on port ${PORT}`);
    console.log(
      `Server listening on http://localhost:${PORT}${server.graphqlPath}`,
    );
  });
};

startApolloServer(resolvers);
