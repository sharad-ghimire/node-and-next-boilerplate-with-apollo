const { gql } = require("apollo-server-express");

module.exports = gql`
  type User {
    _id: ID!
    name: String!
    email: String!
    password: String!
    slug: String
  }
  input UserInput {
    name: String
    email: String
    password: String
  }

  type Query {
    users: [User]
  }

  type Mutation {
    createUser(user: UserInput): User
  }
`;
