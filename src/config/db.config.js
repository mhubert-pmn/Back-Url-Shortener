module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "1234",
    DB: "reactproject",
    port: "3306",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 60000,
      idle: 10000
    }
  };