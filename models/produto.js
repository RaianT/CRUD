// models/produto.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Produto = sequelize.define('Produto', {
  procod: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  pronome: { type: DataTypes.STRING, allowNull: false },
  prodescricao: { type: DataTypes.STRING },
  propreco: { type: DataTypes.DOUBLE, allowNull: false },
  proqtdestoque: { type: DataTypes.INTEGER, allowNull: false },
  procategoria: { 
    type: DataTypes.INTEGER,
    references: {
      model: 'categoria',
      key: 'catcod'
    }
  }
}, {
  tableName: 'produto',
  timestamps: false
});

module.exports = Produto;
