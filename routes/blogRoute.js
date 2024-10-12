let express = require("express")
let controll = require("../controllers/blogController.js")
let route = express()

route.post('/' , controll.blogadd )
route.get('/', controll.getblog)
route.patch('/:id' , controll.updateblog)
route.delete('/:id',controll.deleteblog)

module.exports = route 
