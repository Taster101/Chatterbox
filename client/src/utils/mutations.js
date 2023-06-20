import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation createUser($username: String!, $password: String!) {
    addUser(username: $username, password: $password) {
      token
      user {
        username
        password
      }
    }
  }
`;

export const LOGIN_USER = gql`                            
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_MEMORY = gql`
mutation addMemory($memory: String!) {
  addMemory(memory: $memory) {
    _id
    memory
  }
}
`;