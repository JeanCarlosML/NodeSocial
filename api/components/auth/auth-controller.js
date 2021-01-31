const auth = require("../../../auth/index");
const bcrypt = require("bcrypt");
const TABLA = "auth";

module.exports = function (store = require("../../../store/dummy")) {
  function upsert(data) {
    const authData = {
      id: data.id,
    };
    if (data.username) {
      authData.username = data.username;
    }
    if (data.password) {
      authData.password = bcrypt.hashSync(data.password, 10);
    }
    return store.upsert(TABLA, authData);
  }
  async function login(username, password) {
    const data = await store.query(TABLA, { username });
    if (bcrypt.compareSync(password, data.password)) {
      //generar token
      return auth.sign(data);
    } else {
      throw new Error("Error en la autenticacion");
    }
  }
  return {
    upsert,
    login,
  };
};
