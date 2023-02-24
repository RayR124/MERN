const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Book {
    authors: [String]
    description: String
    boodId: String
    image: String
    link: String
    title: String
    _id: ID
}
type User {
    username: String
    email: String
    password: String
    savedBooks: [bookSchema]
    toJSON: Boolean
    _id: ID
}
type Auth {

}
type Query {
    getAllBooks: [books]

}
type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(book: SavedBookInput): User
    removeBook(bookId: String!): User
}
`;

module.exports = typeDefs;