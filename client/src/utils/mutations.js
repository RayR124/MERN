import { graphql } from '@apollo/client';

export const userLogin = graphql`
  mutation login(
    $email: String!
    $password: String!
  ) {
    login(
      email: $email
      password: $password
    ) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const newUser = graphql`
  mutation addUser(
    $username: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      username: $username
      email: $email
      password: $password
    ) {
      token
      user {
        _id
        username
        email
        savedBooks {
          bookId
          image
          title
          description
        }
      }
    }
  }
`;

export const saveBook = graphql`
  mutation saveBook($newBook: book!) {
    saveBook(newBook: $newBook) {
      _id
      username
      email
      savedBooks {
        bookId
        description
        title
        image
      }
    }
  }
`;

export const deleteBook = graphql`
  mutation removeBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
      _id
      username
      email
      savedBooks {
        bookId
        description
        title
        image
      }
    }
  }
`;