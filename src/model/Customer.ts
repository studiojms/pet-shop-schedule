import { Sequelize, Model, DataTypes } from 'sequelize';

export class Customer extends Model {
  public id!: number;
  public name!: string;
  public cpf!: string | null;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

const CustomerFactory = (sequelize: Sequelize) => {
  return Customer.init(
    {
      id: {
        type: new DataTypes.INTEGER(),
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: new DataTypes.STRING(),
        allowNull: false,
      },
      cpf: {
        type: new DataTypes.STRING(),
        allowNull: false,
      },
      createdAt: {
        type: new DataTypes.DATE(),
        allowNull: false,
      },
      updatedAt: {
        type: new DataTypes.DATE(),
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'customer',
    }
  );
};

export default CustomerFactory;
