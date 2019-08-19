export default interface IRepository<T> {
  list(): Array<T>;

  get(id: string): T;

  create(object: T): void;

  update(object: T): void;

  delete(id: string): void;
}
