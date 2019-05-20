const mongoose = require('mongoose');
const db_config = require('../../data/config');

mongoose.connect(
    'mongodb://' + db_config.config.host + ':' + db_config.config.port + '/' + db_config.config.database,
    { useNewUrlParser: true  }
);

mongoose.connection.on('connected', () => {
    console.log('数据库连接成功')
});

mongoose.connection.on('disconnected', () => {
    console.log('数据库连接失败')
});

mongoose.connection.on('error', () => {
    console.log('数据库连接异常')
});

module.exports = mongoose;