const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


/**
 * create express app
 * @type {*|Function}
 */
const app = express();

/**
 * parse requests of content-type - application/x-www-form-urlencoded
 */
app.use(bodyParser.urlencoded({ extended: true }))

/**
 * parse requests of content-type - application/json
 */
app.use(bodyParser.json());
app.use(cors({origin: 'http://localhost:3000'}));

const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

/**
 * import all routes
 */
require('./routes/users.routes')(app);
mongoose.Promise = global.Promise;

/**
 * create mongodb connection
 */
mongoose.connect(dbConfig.url)
    .then(function(){
        console.log("Successfully connected to the database");
    }).catch(function(){
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

/**
 * create server connection
 */
app.listen(8000, function(){
    console.log("Server is listening on port 8000");
});