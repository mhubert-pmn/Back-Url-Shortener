const linkController = require('../controllers/linkController');

module.exports = (server) => {
    server.route('/links')
        .get(linkController.getAllLinks)
        .post(linkController.addALink);

    server.route('/users/id_user/links')
        .get(linkController.getUserLinks);
}