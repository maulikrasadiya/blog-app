let userModel = require('../models/userModel');
let bcrypt = require('bcrypt')

let  defaults = (req ,res) => {
    res.send("its default routes")
}
let register = async (req,res) =>{
    let {name , password} = req.body
    if (!name || !password) {
        return res.status(400).json({ message: 'Name and password are required' });
    }
    try {
        let hashedPassword = await bcrypt.hash(password, 10); 
        let userdata = await new userModel({
            name,
            password : hashedPassword
        })
        userdata.save();
        res.json({ message: "User successfully added" });
    } catch (error) {
        res.status(500).json({message: "server eror" , error: error.message})
    }
}
let login = async (req,res) =>{
    let {name , password} = req.body ;
    try {
        let user = await userModel.findOne({ name });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        let isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
                
            res.cookie('user', { id: user._id, name: user.name }, { httpOnly: true });

            return res.json({ message: "User successfully login" });
        } else {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        return res.status(500).json({ message: 'Server Error', error: error.message });
    }
}
let logout = (req,res) =>{
    res.clearCookie('user');
    res.json({ message: "User successfully logout" });
}

module.exports = {
    defaults ,
    register ,
    login ,
    logout
}