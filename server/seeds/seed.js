const db = require('../config/connection');
const { Memory } = require('../models');
const memoryData = require('./memorydata.json');

db.once('open', async () => {
  await Memory.deleteMany({});
  await Memory.create(memoryData);
  console.log('completed!');
  process.exit(0);
});