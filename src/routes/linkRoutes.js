const linkController = require('../controllers/linkController');

module.exports = (server) => {
    server.route('/links')
        .get(linkController.findAll)
        .post(linkController.create);

    server.route('/user/:id_user/links')
        .get(linkController.getUserLinks);
}