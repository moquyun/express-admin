/*
    pp@xnics.com
    npm i mysql -S
 */
var mysql = require('mysql');
var db_config = require('../../data/config');
var c = console.log;
var db = '';
var tablepre = db_config.config['tablepre'];

db = mysql.createConnection(db_config.config);

function handleDisconnect(db) {
    db.on('error', function(err) {
        if (!err.fatal) {
            return;
        }

        if (err.code !== 'PROTOCOL_CONNECTION_LOST') {
            throw err;
        }
        console.log('Re-connecting lost mysql: ' + err.code);
        db = mysql.createConnection(db.config);
        handleDisconnect(db);
        db.connect();
    });
}
handleDisconnect(db);


db.connect(function(err) {
    if (err) throw console.log('mysql err: ' + err.code);
    console.log('   mysql connected');
});

exports.createTable = function(){
    console.log('mysql');
};