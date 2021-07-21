const db = require("../models");
const User = db.user;

checkDuplicatePseudoOrEmail = (req, res, next) => {
  // Pseudo
  User.findOne({
    where: {
      pseudo: req.body.pseudo
    }
  }).then(user => {
    if (user) {
      res.status(400).send({
        message: "Sorry, this pseudo is already in use!!!"
      });
      return;
    }

    // Email
    User.findOne({
      where: {
        email: req.body.email
      }
    }).then(user => {
      if (user) {
        res.status(400).send({
          message: "Sorry, this email is already in use!!!"
        });
        return;
      }

      next();
    });
  });
};


const verifySignUp = {
  checkDuplicatePseudoOrEmail: checkDuplicatePseudoOrEmail,
};

module.exports = verifySignUp;