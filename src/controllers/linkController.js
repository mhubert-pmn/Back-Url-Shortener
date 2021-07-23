const db = require("../models");
const Link = db.link

exports.findAll = (req, res) => {
    // Recuperate all links from user
    Link.findAll(
        { where: {user_idUser: req.query.user_idUser} })
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

exports.findOne = (req, res) => {
  // Recuperate one link from custom_link
  Link.findOne(
      { where: {customLink: 'http://localhost:8201/shortener/'+req.params.customLink} })
  .then(data => {
    if (data === null) {
      res.status(400).send({
        message:"the link does not exist"
      });
    }else {
      res.send(data.originLink);
    }    
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving link."
    });
  });
};

// create Link
exports.create = (req, res) => {

    var customLinkG = '';
    var customLinkB = '';

    // check if exist
    while(customLinkB == customLinkG){
      customLinkG = generateCustomLink();
      Link.findOne(
        { where: {customLink: 'http://localhost:8201/shortener/'+customLinkG} })
      .then(data => {
        if (data !== null) {
          customLinkB = data.customLink;
        }    
      })
    }

    const link = {
        user_idUser: req.body.user_idUser,
        customLink: 'http://localhost:8201/shortener/'+customLinkG,
        originLink: req.body.originLink
      };
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


// generate custom link
function generateCustomLink() {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < 10; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}