const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
  _id: ID
  username: String
  password: String
  age: Int
  memory:[Memory]!
}

type Memory {
    _id: ID
    title: String
    memory: String
    likes: Boolean
    tag: String
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    comment: String
    commentAuthor: String
    createdAt: String
  }
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user: [User]
    memory: [Memory]
    Memory(MemoryId: ID!): Memory
    me: User
  }

  type Mutation {
    addUser(username: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    addMemory(memoryText: String!): Memory
    addComment(thoughtId: ID!, commentText: String!): Memory
    removeMemory(thoughtId: ID!): Memory
    removeComment(thoughtId: ID!, commentId: ID!): Memory
  }
`

  

;


module.exports = typeDefs;