// models/cliente.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Cliente = sequelize.define('Cliente', {
  clicod: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  clinome: { type: DataTypes.STRING, allowNull: false },
  clicelular: { type: DataTypes.STRING, allowNull: false },
  cliemail: { type: DataTypes.STRING },
  clidatanasc: { type: DataTypes.DATE },
  clirua: { type: DataTypes.STRING },
  clinumero: { type: DataTypes.INTEGER },
  clibairro: { type: DataTypes.STRING },
  clicep: { type: DataTypes.STRING(9) },
  clicomplemento: { type: DataTypes.STRING }
}, {
  tableName: 'cliente',
  timestamps: false
});

module.exports = Cliente;
