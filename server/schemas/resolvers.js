const { Memory } = require('../models');

const resolvers = {
    Query: {
        memory: async () => {
            return await Memory.find();
        }
    }
};

module.exports = resolvers;