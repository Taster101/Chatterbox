import { gql } from '@apollo/client';

export const ALL_MEMORIES = gql`
query allMemory {
  memory {
    _id
    memory
  }
}
`;

export const ALL_MEMORIES_BY_USER = gql`
query allMemoriesByUser {
    user {
      username
      password
      memory {
        _id
        memory
      }
    }
  }
`;

export const ALL_USERS = gql`
query getAllUsers {
    user {
      username
      _id
    }
  }
`;

export const TAG_SEARCH = gql`
query MemoryTag($tag: String) {
  memoryTag(tag: $tag) {
    memory
    comments {
      comment
    }
    
  }
}



`