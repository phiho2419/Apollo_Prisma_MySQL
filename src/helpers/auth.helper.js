const jwt = require("jsonwebtoken");
const { SECRETKEY_TOKEN } = require("../constants");
const { getTimeStampSecond } = require("../utils/date");

const authenticate = (token) => {
  try {
    const decode = jwt.verify(token, SECRETKEY_TOKEN);
    if (decode.exp < getTimeStampSecond) {
      return false;
    }
    return decode;
  } catch (error) {
    return false;
  }
};

module.exports = {
  authenticate,
};
