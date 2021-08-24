const User = require('./User');
const Shift = require('./Shift');
const Offer = require('./Offer');

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

Shift.findOneWithUser = async function( id, options = {} ) {

    return this.findByPk(id, {
        attributes: {
            exclude: ['owner_id']
        },
        include: {
            model: User,
            attributes: ['id','name']
        },
        ...options
      });

};

Offer.findOffered = async function( userId ) {
    return await this.findAll({
        include: [
            {
                model: Shift,
                as: 'shift_offered',
                include: User,
                where: {
                    owner_id: userId
                }
            },
            {
                model: Shift,
                include: User,
                as: 'shift_wanted'
            }
        ]
    })
}

Offer.findWanted = async function( userId ) {
    return await this.findAll({
        include: [
            {
                model: Shift,
                include: User,
                as: 'shift_offered'
            },
            {
                model: Shift,
                include: User,
                as: 'shift_wanted',
                where: {
                    owner_id: userId
                }
            }
        ]
    })
}

User.hasMany(Shift, {
    foreignKey: 'owner_id',
    onDelete: 'SET NULL',
});

Shift.belongsTo(User, {
    foreignKey: 'owner_id'
});

Shift.belongsToMany(Shift, {
    through: {
        model: Offer,
        unique: false
    },
    foreignKey: 'offered_shift', // replaces `categoryId`
    otherKey: 'wanted_shift', // replaces `productId`
    as: 'offered_trades'
});

Shift.belongsToMany(Shift, {
    through: {
        model: Offer,
        unique: false
    },
    foreignKey: 'wanted_shift',
    otherKey: 'offered_shift',
    as: 'trades_offered'
});

Offer.belongsTo(Shift, {
    foreignKey: 'offered_shift',
    as: 'shift_offered'
});

Offer.belongsTo(Shift, {
    foreignKey: 'wanted_shift',
    as: 'shift_wanted'
});

module.exports = { User, Shift, Offer };