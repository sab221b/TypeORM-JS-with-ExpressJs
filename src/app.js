const express = require('express');
const app = express();
const path = require('path');
const typeorm = require("typeorm");
const bodyParser = require('body-parser');
const homeRoute = require('./routes/home/index');
const authRoute = require('./routes/auth/index');
app.use(bodyParser.json());
const config = require('../ormconfig')
const PORT = parseInt(process.env.PORT, 10) || 3000;
app.use(bodyParser.urlencoded({ extended: false }));
const hbs = require('express-hbs');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));

typeorm.createConnection(config).then((connection) => {
    console.log('connection success', connection.isConnected);
    app.use('/', homeRoute);
    app.use('/auth', authRoute);

    app.listen(PORT, () => {
        console.log('Express server running at port: ' + PORT);
    });

}).catch((error) => {
    console.log("Error: ", error);
});