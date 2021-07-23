module.exports = (sequelize, Sequelize) => {
    const Link = sequelize.define("link", {
      idLink: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      originLink: {
        type: Sequelize.STRING
      },
      customLink: {
        type: Sequelize.STRING
      },
      user_idUser: {
        type: Sequelize.INTEGER
      }
    });
  
    return Link;
  };