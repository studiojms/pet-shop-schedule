import fs from 'fs';
import { basename, join } from 'path';
import { Sequelize, Options } from 'sequelize';

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/sequelize.json')[env];

interface DbObject {
  [key: string]: any;
}

class DomainFactory {
  private db: DbObject = {};
  private sequelize: Sequelize;

  constructor() {
    this.sequelize = new Sequelize(config as Options);
  }

  init() {
    fs.readdirSync(__dirname)
      .filter(file => file.indexOf('.') !== 0 && file !== basename(__filename) && file.slice(-3) === '.ts')
      .forEach(file => {
        console.log(`======== importing file: ${file} ========`);

        const model = this.sequelize['import'](join(__dirname, file));
        this.db[model.name] = model;

        console.log('using model:', model.name);
        console.log('using table:', model.tableName);
      });

    Object.keys(this.db).forEach(modelName => {
      if (this.db[modelName].associate) {
        this.db[modelName].associate(this.db);
      }
    });

    this.db.sequelize = this.sequelize;
    this.db.Sequelize = Sequelize;
  }
}

export default new DomainFactory();
