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