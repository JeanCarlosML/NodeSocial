module.exports = {
  api: {
    port: process.env.API_PORT || 3000,
  },
  mysql:{
    host: process.env.MYSQL_HOST || "",
    user:process.env.USER || "",
    password:process.env.MYSQL_PASS || "",
    database:process.env.MYSQL_DB || ""
  }
};
