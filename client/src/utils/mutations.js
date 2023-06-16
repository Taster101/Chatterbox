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

export const LOGIN_USER = gql`                            
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
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