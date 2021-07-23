module.exports = {
    HOST: "mysql-database",
    USER: "root",
    PASSWORD: "1234",
    DB: "reactproject",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 60000,
      idle: 10000
    }
  };