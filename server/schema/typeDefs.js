const { graphql } = require('apollo-server-express');

const typeDefs = graphql`
type User {
    username: String!
    email: String!
    savedBooks: [bookSchema]
    _id: ID!
}
type bookSchema {
    authors: [String]
    description: String
    boodId: String!
    image: String
    link: String
    title: String!
    _id: ID!
}
input book {
    bookId: String!
    authors: [String]
    title: String!
    description: String!
    image: String
    link: String
  }
type Auth {
    _id: ID!
    user: User!
}
type Query {
    getAllBooks: [bookSchema]
    user: User!
}
type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(newBook: InputBook!): User
    deleteBook(bookId: ID!): User
}
`;

module.exports = typeDefs;