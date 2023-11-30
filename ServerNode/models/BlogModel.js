//importar la conexion de la base de datos

import db from '../database/db.js';
//importar sequelize
import { DataTypes } from 'sequelize';

const ProductoModel = db.define('products', {
  idProd: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nombreProd: { type: DataTypes.STRING },
  descripcionProd: { type: DataTypes.STRING },
  precioProd: { type: DataTypes.DECIMAL },
  imageProd: {
    type: DataTypes.BLOB,
  },
});

export default ProductoModel;
