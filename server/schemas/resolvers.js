const { Memory, User } = require('../models');

const resolvers = {
    Query: {
        memory: async () => {
            return await Memory.find();
        },
        user: async () => {
            return await User.find();
        }
    }
};

module.exports = resolvers;