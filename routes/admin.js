var express = require('express');
var router = express.Router();

//router中间间
router.use(function(req, res, next) {
    // console.log('test');
    next();
});

router.get('/',(req, res ,next) =>{
   res.send('0000');
});

router.get('/test/:userId(\\d+)',(req, res, next) => {
   console.log(req.params);//{ userId: '5555' }

});

module.exports = router;

// var stack = [
//     {path: '/user/:id', fns: [fn1, fn2, fn3], // 路由组1
//     {path: '/user/:id', fns: [fn4, fn5, fn5] // 路由组2
// ];

// app.route('/user')
//     .get(function (req, res) {
//         res.send('Get a random book')
//     })
//     .post(function (req, res) {
//         res.send('Add a book')
//     })
//     .put(function (req, res) {
//         res.send('Update the book')
//     })