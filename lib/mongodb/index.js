/*
    pp@
 */
module.exports = {
    insert (insertDate) {
        return new Promise((resolve,reject) => {
            insertDate.save(err =>{
                if(err) throw err;
                resolve();
            });
        });

    },
    update (col, type, whereObj, UpdateObj) {
        return new Promise((resolve, reject) => {
            col[type](whereObj, UpdateObj,err =>{
                if(err) throw err;
                resolve();
            })
        });

    },
    delete (col, type, deleteDate) {
        return new Promise((resolve,reject) => {
            col[type](deleteDate, err =>{
                if(err) throw err;
                resolve();
            })
        });
    },
    find (col,whereObj, UpdateObj) {
        return new Promise((resolve,reject) => {
            col.find(whereObj, UpdateObj,(err,data) =>{
                if(err) throw err;
                resolve(data);
            });
        });

    },
    sort (col, whereObj, showObj, sortObj) {
        return new Promise((resolve,reject) => {
            col.find(whereObj, showObj).sort(sortObj).exec((err, data) => {
                if (err) throw err;
                resolve(data);
            });
        });
    }
}

