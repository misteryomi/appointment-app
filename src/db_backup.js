const mongoose = require('mongoose');

function connect() {
    console.log('Dabase connected');
    mongoose.connect('mongodb://127.0.0.1:27017/appointment');
}

module.exports = {
    connect,
}