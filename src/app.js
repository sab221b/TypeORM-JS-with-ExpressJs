const express = require('express');
const app = express();
const typeorm = require("typeorm");
var bodyParser = require('body-parser');
const routes = require('./routes/index');
app.use(bodyParser.json());
const PORT = parseInt(process.env.PORT, 10) || 3000;
app.use(bodyParser.urlencoded({ extended: false }));

typeorm.createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "mysql",
    database: "mydb",
    synchronize: true,
    logging: false,
    entities: [
        require("./entity/UserSchema"),
    ]
}).then((connection) => {
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