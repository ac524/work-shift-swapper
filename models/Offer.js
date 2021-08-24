const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Offer extends Model {
}

Offer.init(
  {
    offered_shift: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'shift',
        key: 'id',
      },
    },
    wanted_shift: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'shift',
        key: 'id',
      },
    },
    is_closed: {
      type: DataTypes.INTEGER,
      defaultValue: false
    },
    date_traded: {
      type: DataTypes.DATE,
      allowNull: true
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'offer',
  }
);

module.exports = Offer;
