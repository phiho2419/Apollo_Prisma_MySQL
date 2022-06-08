const { prisma } = require("../database.js");
const { Query } = require("./query.js");
const { Mutation } = require("./mutation.js");

// const User = {
//   id: (parent, args, context, info) => parent.id,
//   fullname: (parent) => parent.fullname,
//   password: (parent) => parent.password,
//   gender: (parent) => parent.gender,
//   email: (parent) => parent.email,
//   phonenumber: (parent) => parent.phonenumber,
//   role: (parent) => parent.role,
// };

const resolvers = {
  Query,
  Mutation,
};

module.exports = {
  resolvers,
};
