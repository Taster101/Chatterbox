const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
  _id: ID
  username: String
  password: String
  age: Int
  memmory:[Memory]!
}

type Memory {
    _id: ID
    title: String
    memory: String
    likes: Int
    tag: String
    comments: [Comment]!
  }

  
  type Comment {
    _id: ID
    comment: String
    commentAuthor: String
    createdAt: String
  }

type Query {


  type Auth {
    token: ID!
    user: User
  }

  type Query {

    memory: [Memory]
    user: [User]
  }

  type Mutation {
    addUser(username: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;