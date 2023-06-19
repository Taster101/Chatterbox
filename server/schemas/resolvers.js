const { AuthenticationError } = require('apollo-server-express');
const { Memory, User } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
    Query: {
        memory: async () => {
            return Memory.find().sort({ createdAt: -1 });
        },
        user: async () => {
            return await User.find();

        },
        memoryTag: async (parent,args) => {
            console.log(args)
            return await Memory.find({tag:tag})
        }
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