const { Post } = require('../models');



/*post function */

exports.createPost = (req, res) => {
    console.log(req.body)
    let imageUrl = ""
    let post = req.body
    if (req.file) {
        post = JSON.parse(req.body.post);
        const url = req.protocol + '://' + req.get('host');
        imageUrl = url + '/images/' + req.file.filename;
    }
    Post.create({
        message: post.message,
        userId: post.userId,
        imageUrl
    }).then(post => {
        console.log(post)
        res.status(201).json({
            message: 'Post added sucessfully!',
        });
    }
    ).catch(error => {
        res.status(500).json({
            error: error,
        });
    }
    );
}
//TODO create exports.getallPosts
// exports.getAllPosts = (req, res) => {

// }