const { nanoid } = require("nanoid");
const auth = require("../auth");
const TABLA = "user";

module.exports = function (store = require("../../../store/dummy")) {
  function list() {
    return store.list(TABLA);
  } 
  function get(id) {
    return store.get(TABLA, id);
  }
  async function upsert(body) {
    const user = {
      id: body.id || nanoid(),
      name: body.name,
      username: body.username,
      role: body.role || "USER_ROLE",
    };
    if (body.password || body.username) {
      await auth.upsert({
        id: user.id,
        username: user.username,
        password: body.password,
        role: body.role || "USER_ROLE",
      });
    }
    return store.upsert(TABLA, user);
  }
  return {
    list,
    get,
    upsert,
  };
};
