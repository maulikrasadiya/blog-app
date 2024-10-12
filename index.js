let express = require('express');
let app = express();
let PORT = 5000;
let userRoute = require('./routes/userRoute')
let blogRoute = require("./routes/blogRoute");
let mongoose = require('./database/db')
let body_parser = require('body-parser');
let cookie_parser = require('cookie-parser');

app.use(body_parser.urlencoded({extended:true}));
app.use(express.json());
app.use(cookie_parser());
app.use('/',userRoute);
app.use('/blog',blogRoute);

app.listen(PORT,(req,res)=>{
    console.log(`Running on port : ${PORT}`);
})