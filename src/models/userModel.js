module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
      pseudo: {
        type: Sequelize.STRING
      },
      idUser: {
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      }
    });
  
    return User;
  };