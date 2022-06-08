const jwt = require("jsonwebtoken");
const { SECRETKEY_TOKEN } = require("../constants");

const generateToken = (user) => {
  const payload = {
    email: user.email,
    role: user.role,
  };
  const token = jwt.sign(payload, SECRETKEY_TOKEN, {
    expiresIn: "24h", 
  });
  return token;
};



module.exports = {
  generateToken,
};
