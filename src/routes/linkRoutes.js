const linkController = require('../controllers/linkController');

module.exports = (server) => {
    server.route('/links')
        .get(linkController.findAll)
        .post(linkController.create);

    server.route('/shortener/:customLink')        
        .get(linkController.findOne);
}