module.exports = (sequelize, Sequelize) => {
    const Link = sequelize.define("link", {
      idLink: {
        type: Sequelize.INTEGER
      },
      originLink: {
        type: Sequelize.STRING
      },
      customLink: {
        type: Sequelize.STRING
      },
      idUser: {
        type: Sequelize.INTEGER
      }
    });
  
    return Link;
  };