//Base de datos de prueba para probar la arquitectura
//Luego se parte a una bd relacional o no relacional

const db = {
  user: [{ id: 1, name: "carlos" }],
};

function list(table) {
  return db[table];
}
function get(table, id) {
  let col = list(table);
  return col.find((item) => item.id == id);
}
function upsert(table, data) {
  db[collection].push(data);
}
function remove(table, id) {
  return true;
}

module.exports = {
  list,
  get,
  upsert,
  remove,
};
