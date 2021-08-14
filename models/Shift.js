const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Shift extends Model {
}

Shift.init(
  {
    is_swappable: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    owner_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'user',
        key: 'id',
      },
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'shift',
  }
);

module.exports = Shift;
