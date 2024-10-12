let mongoose = require("mongoose")

let blogSchema = mongoose.Schema({

    btitle : {
        type : String,
        required : true
    },
    content : {
        type : String,
        required : true
    },
    author : {
        type : String,
        required : true 
    },
    authid : {
        type : String,
        required : true
    }
})

let blogModel = mongoose.model('Blogs' , blogSchema)

module.exports = blogModel