const mongoose = require('mongoose');

function connect() {
    mongoose.connect('mongodb://127.0.0.1:27017/appointments_db');
}


module.exports = {
    connect
}