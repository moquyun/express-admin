var express = require('express');
var router = express.Router();

//router中间间
router.use(function(req, res, next) {
    // 。。。判断登录
    let isLogin = req.session.isLogin;
    if(!isLogin){
        res.redirect('/admin/login');
    }else{
        if(isLogin === 'ok'){
            next();
        }else{
            res.redirect('/admin/login');
        }
    }
});
let sysconfig = {
    title:'xxx-网站管理后台',
    urlHost:'www.xxx.com'
};
let menu = {
    title:'网站管理',
    menu:[
        {
            title:'网站管理',
            ico:'icon mdi mdi-home',
            childMenu:[
                {
                    title:'网站配置',
                    href:'#1'
                },
                {
                    title:'管理员管理'
                }
            ]
        },
        {
            title:'会员管理',
            ico:'icon mdi mdi-home',
            childMenu:[
                {
                    title:'会员管理'
                }
            ]
        }
    ]
};
router.get('/',(req, res ,next) =>{
   res.render('admin/index',{
       sys:sysconfig,
       menu
   });
});

router.get('/test/:userId(\\d+)',(req, res, next) => {
   console.log(req.params);//{ userId: '5555' }

});

router.get('/session',(req,res,next) => {
    // console.log(2222)
    req.session.aaa = 'ok';
    res.send('222');
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