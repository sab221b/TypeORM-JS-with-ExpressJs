var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

module.exports = router;


// const userController = require("../controller/UserController");

// exports.UserRoutes = [
//     {
//         path: "/users",
//         method: "get",
//         action: userController.getUsers
//     },
//     {
//         path: "/users/:id",
//         method: "get",
//         action: userController.getUserById
//     },
//     {
//         path: "/users",
//         method: "post",
//         action: userController.createUser
//     },
//     {
//         path: "/users/:id",
//         method: "delete",
//         action: userController.deleteUserByID
//     },
// ];