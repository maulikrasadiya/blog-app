let blogModel = require('../models/blogModel.js')

let blogadd = (req, res) => {
    let user = req.cookies.user; 
    if (!user) { return res.status(401).json({ message: 'User not logged in' }); }

    let { btitle, content } = req.body;

    if (!btitle || !content) { return res.status(400).json({ message: 'Title and content are required' }); }

    
    let newBlog = new blogModel({
        btitle: btitle,
        content: content,
        authid: user.id  ,
        author : user.name
    });

    newBlog.save()
        .then((savedBlog) => {
            res.json({ message: "Blog successfully added", blog: savedBlog });
        })
        .catch((error) => {
            res.status(500).json({ message: 'Error adding blog', error: error.message });
        });
};

let getblog = async (req, res) => {

    let user = req.cookies.user;

    if (!user) { return res.status(401).json({ message: 'User not logged in' }); }

    try {
        let blogs = await blogModel.find({ authid: user.id });

        if (blogs.length === 0) {return res.status(404).json({ message: "No blogs found for this user" });}

        res.json({ blogs });

    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }

};

let updateblog = async (req, res) => {
    let blogId = req.params.id; 
    let updates = req.body;

    try {
        
        let updatedBlog = await blogModel.findByIdAndUpdate(blogId, updates, {
            new: true,  
            runValidators: true
        });

    
        if (!updatedBlog) { return res.status(404).json({ message: "Blog not found" }); }

        res.json({ message: "Blog updated successfully", blog: updatedBlog });

    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

let deleteblog = async (req, res) => {
    let blogId = req.params.id; 

    try {
      
        let deletedBlog = await blogModel.findByIdAndDelete(blogId);

        if (!deletedBlog) {
            return res.status(404).json({ message: "Blog not found" });
        }

        res.json({ message: "Blog deleted successfully", blog: deletedBlog });
        
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};



module.exports = {
    blogadd , getblog , updateblog , deleteblog
};
