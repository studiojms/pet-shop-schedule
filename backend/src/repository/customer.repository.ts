import IRepository from './IRepository';
import { Customer } from '../model/Customer';
import { Pet } from '../model/Pet';

class CustomerRepository implements IRepository<Customer> {
  public list(): any {
    return Customer.findAll({
      include: [
        {
          model: Pet,
          as: 'pets',
        },
      ],
    });
  }

  public get(id: string | number): any {
    return Customer.findByPk(id, {
      include: [
        {
          model: Pet,
          as: 'pets',
        },
      ],
    });
  }

  public create(object: Customer): any {
    return Customer.create(object);
  }

  public update(object: Customer): any {
    return Customer.update(object, {
      where: {
        id: object.id,
      },
    }).then(() => {
      return this.get(object.id);
    });
  }

  public delete(id: any): any {
    return Customer.destroy({
      where: {
        id: id,
      },
    }).then(() => id);
  }
}

export default new CustomerRepository();
