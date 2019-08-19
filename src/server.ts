import { GraphQLServer } from 'graphql-yoga';

import DomainFactory from './model/index';
import CustomerRepository from './repository/customer.repository';
import PetRepository from './repository/pet.repository';

DomainFactory.init();
const resolvers = {
  Query: {
    listCustomers: () => CustomerRepository.list(),
    getCustomerById: (_root: any, { id }: any) => CustomerRepository.get(id),
    listPets: () => PetRepository.list(),
  },
  Mutation: {
    addCustomer: (_root: any, params: any) => CustomerRepository.create(params),
    updateCustomer: (_root: any, params: any) => CustomerRepository.update(params),
    removeCustomer: (_root: any, params: any) => CustomerRepository.delete(params.id),
    addPet: (_root: any, params: any) => PetRepository.create(params),
  },
};

const server = new GraphQLServer({
  typeDefs: './src/schema/schema.graphql',
  resolvers,
});

server.start({ port: 3000 }, ({ port }) => `Server running on port ${port}`);
