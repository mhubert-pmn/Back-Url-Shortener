const userController = require('../controllers/authController');

module.exports = (server) => {
    server.post('/user/signup', userController.signup);
    server.post('/user/signin', userController.signin);
}