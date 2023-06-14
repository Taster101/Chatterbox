const db = require('../config/connection');
const { Memory,User } = require('../models');
const memoryData = require('./memorydata.json');
const userData = require('./user.json');

db.once('open', async () => {
  await Memory.deleteMany({});
  await Memory.create(memoryData);
  await User.deleteMany({});
  await User.create(userData);
  console.log('completed!');
  process.exit(0);
});