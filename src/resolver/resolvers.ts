import CustomerRepository from '../repository/customer.repository';
import PetRepository from '../repository/pet.repository';

const resolvers = {
  Query: {
    listCustomers: () => CustomerRepository.list(),
    getCustomerById: (_root: any, { id }: any) => CustomerRepository.get(id),

    listPets: () => PetRepository.list(),
    getPetById: (_root: any, { id }: any) => PetRepository.get(id),
  },
  Mutation: {
    addCustomer: (_root: any, params: any) => CustomerRepository.create(params),
    updateCustomer: (_root: any, params: any) => CustomerRepository.update(params),
    removeCustomer: (_root: any, params: any) => CustomerRepository.delete(params.id),

    addPet: (_root: any, params: any) => PetRepository.create(params),
    updatePet: (_root: any, params: any) => PetRepository.update(params),
    removePet: (_root: any, params: any) => PetRepository.delete(params.id),
  },
};

export default resolvers;
