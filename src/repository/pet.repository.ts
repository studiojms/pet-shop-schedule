import IRepository from './IRepository';
import { Pet } from '../model/Pet';
import { Customer } from '../model/Customer';

class PetRepository implements IRepository<Pet> {
  public list(): any {
    return Pet.findAll({
      include: [
        {
          model: Customer,
        },
      ],
    }).then(result => {
      return result.map((pet: any) => ({
        ...pet.dataValues,
        owner: {
          id: pet.Customer.id,
          name: pet.Customer.name,
          documentNumber: pet.Customer.documentNumber,
          createdAt: pet.Customer.createdAt,
          updatedAt: pet.Customer.updatedAt,
        },
      }));
    });
  }

  public get(id: string): any {
    return Pet.findByPk(id);
  }

  public create(object: Pet): any {
    return Pet.create(object);
  }

  public update(object: Pet): any {
    return Pet.update(object, {
      where: {
        id: object.id,
      },
    }).then(() => {
      return object;
    });
  }

  public delete(id: any): any {
    return Pet.destroy({
      where: {
        id: id,
      },
    }).then(() => id);
  }
}

export default new PetRepository();
