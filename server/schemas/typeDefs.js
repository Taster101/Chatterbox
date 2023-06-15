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
    memory: [Memory]
    user: [User]
  }
`;

module.exports = typeDefs;