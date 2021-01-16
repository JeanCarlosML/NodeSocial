//Variable que almacena referencia de la db
const store = require("../../../store/dummy");
const ctrl = require("./controller");
//Parametro store apunta a la bd que se desea usar
//Si no se envia la db, se usa la db prototipo
module.exports = ctrl(store);
