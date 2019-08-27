import { GraphQLServer } from 'graphql-yoga';

import DomainFactory from './model/index';
import resolvers from './resolver/resolvers';

DomainFactory.init();

const server = new GraphQLServer({
  typeDefs: './src/schema/schema.graphql',
  resolvers,
});

server.start({ port: 3000 }, ({ port }) => `Server running on port ${port}`);
