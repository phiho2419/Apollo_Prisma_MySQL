const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    fullname: String
    password: String
    gender: String
    email: String
    phonenumber: String
    role: UserRole
    createdAt: String
    updatedAt: String
  }
  type Query {
    getUser: [User]
    getUserById(id: ID!): User
    getUserByEmail(email: String!): User
    getAmountOfUserActiveOnDay(date: String!): [UserActiveOnDay]!
    getAmountOfNewUserOnDay(date: String!): [NewUserOnDay]!
  }
  type AuthPayLoad {
    token: String!
    userData: User
  }
  type DeleteUserReport {
    message: String!
  }
  type NewUserOnDay {
    amount: String
  }
  type UserActiveOnDay {
    amount: String
  }
  type Mutation {
    loginUser(password: String!, email: String!): AuthPayLoad!
    registerUser(
      fullname: String!
      password: String!
      gender: String!
      email: String!
      phonenumber: String!
      role: String
    ): User
    updateUser(
      fullname: String
      password: String
      gender: String
      email: String!
      phonenumber: String
      role: String
      token: String!
    ): User
    deleteUser(email: String!, token: String!): DeleteUserReport!
  }

  enum UserRole {
    ADMIN
    USER
  }
`;

module.exports = {
  typeDefs,
};
