//Base de datos de prueba para probar la arquitectura
//Luego se parte a una bd relacional o no relacional

const db = {
  user: [{ id: 1, name: "carlos" }],
};

async function list(table) {
  return db[table];
}
async function get(table, id) {
  let col = await list(table);
  return col.find((item) => item.id == id);
}
async function upsert(table, data) {
  if (!db[table]) {
    db[table] = [];
  }
  db[table].push(data);
  console.log(db)
}
async function remove(table, id) {
  return true;
}

module.exports = {
  list,
  get,
  upsert,
  remove,
};
