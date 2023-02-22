const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Traveller model
class ProductTag extends Model { }

// create fields/columns for Traveller model
ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product',
        key: 'id',
      }
    },
    tag_id: {
      tag_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'tag',
          key: 'id',
        }
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag'
  },
);

module.exports = ProductTag;
