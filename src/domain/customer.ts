export class Customer {
  private _id: string;

  private _name: string;

  private _cpf: string;

  constructor(id: string, name: string, cpf: string) {
    this._id = id;
    this._name = name;
    this._cpf = cpf;
  }

  get name() {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get id() {
    return this._id;
  }

  set id(id: string) {
    this._id = id;
  }

  get cpf() {
    return this._cpf;
  }

  set cpf(cpf: string) {
    this._cpf = cpf;
  }
}
