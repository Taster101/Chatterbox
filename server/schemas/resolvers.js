// const { AuthenticationError } = require('apollo-server-express');  added by -Ethan
const { Memory, User } = require('../models');
// const { signToken } = require('../utils/auth');  added by -Ethan


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
    addUser: async (parent, { username, email, password }) => {
        const user = await User.create({ username, email, password });
        const token = signToken(user);
        return { token, user };
    },
    login: async (parent, { email, password}) => {
        const user = await User.findOne({ email });
        if (!user) {
            throw new AuthenticationError('No user found with this email address');
        }
        const correctPw = await user.isCorrectPassword(password);
        if (!correctPw) {
            throw new AuthenticationError('Incorrect credentials');
        }
        const token = signToken(user);
        return {token, user};
    },
}
};

module.exports = resolvers;