const { gql } = require('apollo-server-express');

const typeDefs = gql`
type bookSchema {
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
    _id: ID
}
type Query {
    getAllBooks: [bookSchema]

}
type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
}
`;

module.exports = typeDefs;