import IRepository from './IRepository';
import { Customer } from '../domain/customer';

export class CustomerRepository implements IRepository<Customer> {
  public list(): Customer[] {
    throw new Error('Method not implemented.');
  }

  public get(id: string): Customer {
    throw new Error('Method not implemented.');
  }

  public create(object: Customer): void {
    throw new Error('Method not implemented.');
  }

  public update(id: string, object: Customer): void {
    throw new Error('Method not implemented.');
  }

  public delete(id: string): void {
    throw new Error('Method not implemented.');
  }
}
