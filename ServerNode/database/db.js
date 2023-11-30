import { Sequelize } from 'sequelize';

const db = new Sequelize('tiendabh', 'root', 'Artemisa2119', {
  host: 'localhost',
  dialect: 'mysql',
});

export default db;
