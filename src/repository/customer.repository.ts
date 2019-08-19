import IRepository from './IRepository';
import { Customer } from '../model/Customer';

class CustomerRepository implements IRepository<Customer> {
  public list(): any {
    return Customer.findAll();
  }

  public get(id: string): any {
    return Customer.findByPk(id);
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
      return object;
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
