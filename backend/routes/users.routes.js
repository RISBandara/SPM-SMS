module.exports = function(app){
    const users = require("../controllers/user.controller.js");

    /**
     * All user routes
     */
    app.post('/user', users.create);
    app.post('/users', users.validate);
    // app.get('/users', users.findAll);
    // app.post('/user-mail',users.sendEmailForUser);

}