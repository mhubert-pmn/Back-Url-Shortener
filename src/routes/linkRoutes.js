const linkController = require('../controllers/linkController');

module.exports = (server) => {
    server.route('/links')
        .get(linkController.findAll)
        .post(linkController.addcreateALink);

    server.route('/user/:id_user/links')
        .get(linkController.getUserLinks);
}