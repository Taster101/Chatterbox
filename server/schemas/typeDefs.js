const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Memory {
    _id: ID
    title: String
    memory: String
    likes: Int
    tag: String
  }

  type User {
    _id: ID
    username: String
    password: String
    age: Int
  }

type Query {
    memory: [Memory]
    user: [User]
  }
`;

module.exports = typeDefs;