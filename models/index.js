const User = require('./User');
const Shift = require('./Shift');

User.hasMany(Shift, {
    foreignKey: 'owner_id',
    onDelete: 'SET NULL'
});

Shift.belongsTo(User, {
    foreignKey: 'owner_id'
});

module.exports = { User, Shift };