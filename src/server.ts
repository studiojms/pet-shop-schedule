import { GraphQLServer } from 'graphql-yoga';

import CustomerRepository from './repository/customer.repository';
import DomainFactory from './model/index';

DomainFactory.init();
const resolvers = {
  Query: {
    // hello: () => 'Hello',
    listCustomers: () => CustomerRepository.list(),
  },
  Mutation: {
    addCustomer: (_root: any, params: any) => CustomerRepository.create(params),
  },
};

const server = new GraphQLServer({
  typeDefs: './src/schema/schema.graphql',
  resolvers,
});

server.start({ port: 3000 }, ({ port }) => `Server running on port ${port}`);
