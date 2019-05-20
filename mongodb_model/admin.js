const mongoose = require('./../lib/mongodb/db');
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
    user: { type: String },
    password: { type: String },
    mobile: { type: String },
    email: { type: String },
    token: { type: String }
});

module.exports = mongoose.model('Admin', AdminSchema);