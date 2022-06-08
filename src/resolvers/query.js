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
  getAmountOfNewUserOnDay: () => {
    return { amount: 0 };
  },
  getAmountOfUserActiveOnDay: () => {
    return { amount: 0 };
  },
};

module.exports = {
  Query,
};
