const { prisma } = require("../database.js");
const { Query } = require("./query");
const { generateToken } = require("../helpers/jwt.helper.js");
const { validateEmail } = require("../utils/validation.js");
const bcryptjs = require("bcryptjs");
const { authenticate } = require("../helpers/auth.helper.js");
const Mutation = {
  loginUser: async (root, args) => {
    const { email, password } = args;
    const validEmail = validateEmail(email);
    if (!validEmail) throw new Error("Email invalidate");
    const theUser = await prisma.user.findFirst({
      where: {
        email,
      },
    });
    if (!theUser) throw new Error("Unable to Login");
    const isMatch = bcryptjs.compareSync(password, theUser.password);
    if (!isMatch) throw new Error("Unable to Login");
    return {
      token: generateToken({ email, role: theUser.role }),
      userData: theUser,
    };
  },
  registerUser: async (parent, args) => {
    const theUser = await prisma.user.findFirst({
      where: {
        email: args.email,
      },
    });
    if (theUser) throw new Error("Email is already exist !");
    const salt = bcryptjs.genSaltSync();
    const hasPassword = bcryptjs.hashSync(args.password, salt);
    return prisma.user.create({
      data: {
        fullname: args.fullname,
        password: hasPassword,
        gender: args.gender,
        email: args.email,
        phonenumber: args.phonenumber,
        role: args.role,
      },
    });
  },
  updateUser: async (parent, args) => {
    const { role } = authenticate(args.token);
    let hasPassword = null;
    if (args.password) {
      const salt = bcryptjs.genSaltSync();
      hasPassword = bcryptjs.hashSync(args.password, salt);
    }
    if (role !== "ADMIN") throw new Error("UNAUTHORIZE");
    return prisma.user.update({
      where: {
        email: args.email,
      },
      data: {
        fullname: args.fullname,
        password: hasPassword || args.password,
        gender: args.gender,
        phonenumber: args.phonenumber,
        role: args.role,
      },
    });
  },
  deleteUser: async (parent, args) => {
    try {
      const { role } = authenticate(args.token);
      if (role !== "ADMIN") throw new Error("UNAUTHORIZE");
      await prisma.user.delete({
        where: {
          email: args.email,
        },
      });
      return { message: "DELETE SUCCESS" };
    } catch (error) {
      return { message: "DELETE FAIL" };
    }
  },
};

module.exports = {
  Mutation,
};
