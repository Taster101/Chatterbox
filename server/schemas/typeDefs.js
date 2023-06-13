const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Memory {
    _id: ID
    name: String
    memory: String
  }

type Query {
    memory: [Memory]
  }
`;

module.exports = typeDefs;