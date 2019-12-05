const express = require('express');
const app = express();
const typeorm = require("typeorm");
var bodyParser = require('body-parser');
const routes = require('./routes/index');
app.use(bodyParser.json());
const config = require('../ormconfig')
const PORT = parseInt(process.env.PORT, 10) || 3000;
app.use(bodyParser.urlencoded({ extended: false }));
var hbs = require('express-hbs');
// Use `.hbs` for extensions and find partials in `views/partials`.
app.engine('hbs', hbs.express4({
  partialsDir: __dirname + '/views/partials'
}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

typeorm.createConnection(config).then((connection) => {
    console.log('connection success', connection.isConnected);
    routes.UserRoutes.forEach(route => {
        app[route.method](route.path, (req, res, next) => {
            route.action(req, res)
        });
    });

    app.get('/', (req, res) => {
        res.status(200).send({ message: 'Learn TypeORM(JS) with ExpressJs' })
    })

    app.listen(PORT, () => {
        console.log('Express server running at port: ' + PORT);
    });

}).catch((error) => {
    console.log("Error: ", error);
});