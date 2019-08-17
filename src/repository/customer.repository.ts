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

  public update(id: string, object: Customer): void {
    console.log(id, object);
  }

  public delete(id: string): any {
    return Customer.destroy({
      where: {
        id: id,
      },
    });
  }
}

export default new CustomerRepository();
