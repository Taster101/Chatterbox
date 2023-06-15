const { AuthenticationError } = require('apollo-server-express');
const { Memory, User } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
    Query: {
        memory: async () => {
            return await Memory.find();
        },
        user: async () => {
            return await User.find();
        },
    },


    Mutation: {
        addUser: async (parent, { username, password }) => {
            const user = await User.create({ username, password });
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { username, password }) => {
            const user = await User.findOne({ username });
            if (!user) {
                throw new AuthenticationError('No user found with this username');
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }
            const token = signToken(user);
            return { token, user };
        },
        addMemory: async (parent, { memory }) => { 
            return Memory.create({ memory });
          },
          // add title?
    }
};

module.exports = resolvers;