const User = require('./User');
const Shift = require('./Shift');

Shift.findWithUser = async function( options ) {

    return this.findAll({
      attributes: {
          exclude: ['owner_id']
      },
      include: {
          model: User,
          attributes: ['id','name']
      },
      ...options
    });
  
}

User.hasMany(Shift, {
    foreignKey: 'owner_id',
    onDelete: 'SET NULL',
});

Shift.belongsTo(User, {
    foreignKey: 'owner_id'
});

module.exports = { User, Shift };