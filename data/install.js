const Admin = require('./../mongodb_model/admin');
const db = require('./../lib/mongodb');

const bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);
// HASH值  为加密的密码
// var hash = bcrypt.hashSync('123456',salt);
let admin = new Admin(
    {
        user: 'admin',
        password: bcrypt.hashSync('admin',salt),
        mobile: '15012345678',
        email: 'pp@admin.com',
        token: '_admin'
    }
);
db.insert(admin).then(() => {
    console.log('管理员表新增成功...');
});