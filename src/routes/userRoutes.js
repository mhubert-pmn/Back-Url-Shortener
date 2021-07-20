const userController = require('../controllers/userController');

module.exports = (server) => {
    server.route('/users')
        .post(userController.addAUser);

    server.route('/users/:id_user')
        .get(userController.getAUser);
}