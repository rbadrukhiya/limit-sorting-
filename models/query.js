const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var query = new Schema({
    name:({
        type:String
    })
})

const MyModel = mongoose.model('query', query);
module.exports = MyModel