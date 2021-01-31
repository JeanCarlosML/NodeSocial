const jwt = require("jsonwebtoken");
const error = require("../network/utils/error");
const secret = require("../config").jwt.secret;
function sign(data) {
  return jwt.sign(data, secret);
}

function verify(token) {
  return jwt.verify(token, secret);
}

const check = {
  own: function (req, owner) {
    const decoded = decodeHeader(req);
    //comprobar
    if (decoded.id !== owner) {
      throw error("No puedes hacer esto", 401);
    }
  },
};

function getToken(token) {
  if (!token) {
    throw error("No viene token", 401);
  }
  return token;
}

function decodeHeader(req) {
  const token = getToken(req.headers.authorization || "");
  const decoded = verify(token);
  req.user = decoded;
  return decoded;
}

module.exports = {
  sign,
  check,
};
