const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;   

const Op = db.Sequelize.Op;

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.signup = (req, res) => {
  // Save User to Database
  User.create({
    pseudo: req.body.pseudo,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10)
  })
    .then((user, error) => {
      if(error) {
        res.status(500);
        console.log(error);
        res.json({
            message: "Server error."
        });
      } else{
        const token = jwt.sign({ id: user.idUser }, config.secret, {
            expiresIn: 86400 // 24 hours
          });

        res.status(201);
        res.json({
            message: `The user ${user.pseudo} has been created`,
            accessToken: token
        });
      }
    })
    .catch(error => {
      res.status(500).send({ message: error.message });
    });
};

exports.signin = (req, res) => {
  User.findOne({
    where: {
      pseudo: req.body.pseudo
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      const passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      const token = jwt.sign({ id: user.idUser }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

      res.status(200).send({
        idUser: user.idUser,
        pseudo: user.pseudo,
        email: user.email,
        accessToken: token
      });

    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};