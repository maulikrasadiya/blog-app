let mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    name: {
        type : String ,
        require : true
    },
    password: {
        type : String ,
        require : true
    }
},{timestamp: true});

let userModel =  mongoose.model('Users', userSchema);
module.exports = userModel