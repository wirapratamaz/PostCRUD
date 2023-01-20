const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
	useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.get('/', (req, res) => {
    res.json({"message": "Welcome to Home"});
});

require('./app/routes/postRoute.js')(app);

// listen for requests
app.listen(5000, () => {
    console.log("Server is listening on port 5000");
});
