const { prisma } = require("../database.js");

const Query = {
  getUserById: async (parent, args) => {
    const user = await prisma.user.findFirst({
      where: { id: Number(args.id) },
    });
    if (user) {
      return user;
    }
    throw new Error("User is not exist");
  },
  getUserByEmail: async (parent, args) => {
    const user = await prisma.user.findFirst({
      where: { email: args.email },
    });
    if (user) {
      return user;
    }
    throw new Error("User is not exist");
  },
  getUser: (parent, args) => {
    return prisma.user.findMany();
  },
  getAmountOfNewUserOnDay: async (parent, args) => {
    const date = args.date;
    const queryString = `SELECT count(id) as amount FROM user where createdAt like "%${date}%";`;
    const amount = await prisma.$queryRawUnsafe(queryString);
    return amount;
  },
  getAmountOfUserActiveOnDay:async (parent, args) => {
    const date = args.date;
    const queryString = `SELECT count(distinct userId) as amount FROM userlogindetail where createdAt like "%${date}%";`;
    const amount = await prisma.$queryRawUnsafe(queryString);
    return amount;
  },
};

module.exports = {
  Query,
};
