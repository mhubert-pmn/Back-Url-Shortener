const db = require("../models");
const Link = db.link

exports.findAll = (req, res) => {
    // Recuperate all links from user
    Link.findAll(
        { where: {user_idUser: req.body.user_idUser} })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving links."
      });
    });
};

exports.create = (req, res) => {
    // Save Tutorial in the database
    Link.create(link)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the link."
        });
      });
  };
  