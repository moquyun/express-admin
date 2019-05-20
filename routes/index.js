var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs');
const Admin = require('./../mongodb_model/admin');
const db = require('./../lib/mongodb');
// var salt = bcrypt.genSaltSync(10);

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
        let { user, password} = req.body;
        db.find(Admin,{ user },{_id:0, __v:0}).then(data => {
            console.log(password);
            if(data.length > 0){
                console.log(data[0].password);
                if(bcrypt.compareSync(password, data[0].password)){
                    req.session.isLogin = 'ok';
                    res.redirect('/admin');
                }else{
                    res.redirect('/admin/login');
                }
            }else{
                res.redirect('/admin/login');
            }
        });
    })
    .put(function (req, res) {
      res.send('put')
    });
module.exports = router;
