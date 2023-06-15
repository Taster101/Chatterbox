import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation createUser($username: String!, $password: String!) {
    addUser(username: $username, password: $password) {
      user {
        username
        password
      }
      token
    }
  }
`;

export const ADD_MEMORY = gql `
mutation addMemory($memory: String!) {
  addMemory(memory: $memory) {
    _id
    memory
  }
}
`;