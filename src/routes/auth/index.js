var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

// routes.UserRoutes.forEach(route => {
//     app[route.method](route.path, (req, res, next) => {
//         route.action(req, res)
//     });
// });
module.exports = router;
