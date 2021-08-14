const sequelize = require('../config/connection');
const { User, Shift } = require('../models');

const userData = require('./userData.json');
const shiftData = require('./shiftData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  

  await Shift.bulkCreate(shiftData.map(( shift ) => ({
    ...shift,
    start_date: new Date( shift.start_date ),
    end_date: new Date( shift.end_date )
  })) ,{
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
