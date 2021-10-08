const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: String
  }

  type Book {
    _id: ID
    bookId: Int
    authors: String
    description: String
    title: String
    image: String
    link: String
  }

  type Auth {
    _id: ID
    token: ID!
    user: [User]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    thoughts(username: String): [Thought]
    thought(_id: ID!): Thought
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(User: String!): Book
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
