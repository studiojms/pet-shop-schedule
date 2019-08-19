import { Sequelize, Model, DataTypes } from 'sequelize';
import { Customer } from './Customer';

export class Pet extends Model {
  public id!: number;
  public name!: string;
  public ownerId!: number;
  public type?: string;
  public comment?: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

const PetFactory = (sequelize: Sequelize) => {
  Pet.init(
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
      ownerId: {
        type: new DataTypes.INTEGER(),
        allowNull: false,
      },
      type: {
        type: new DataTypes.STRING(),
      },
      comment: {
        type: new DataTypes.STRING(),
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
      tableName: 'pet',
    }
  );

  Pet.belongsTo(Customer, {
    targetKey: 'id',
    foreignKey: 'ownerId',
  });

  return Pet;
};

export default PetFactory;
