var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* admin login */
router.route('/admin/login')
    .get(function (req, res) {
        let isLogin = req.session.isLogin;
        if(isLogin){
            if(isLogin === 'ok'){
                res.redirect('/admin');
            }
        }else{
            res.render('admin/login');
        }
    })
    .post(function (req, res) {
      // db.find(Admin,{ user },{_id, __v}, data => {
        let data = [{
            user:'admin',
            password:'$2a$10$cLtTOyIVfxzbdlAj.Yda/OHGANoGgn.kzcPAZihp3QsNe9gb0lKFi'
        }];

        if(data.length > 0){
            if(bcrypt.compareSync(req.body.password, data[0].password)){
                req.session.isLogin = 'ok';
                res.redirect('/admin');
            }else{
                res.redirect('/admin/login');
            }
        }else{
            res.redirect('/admin/login');
        }
      // });

    })
    .put(function (req, res) {
      res.send('put')
    });


module.exports = router;
