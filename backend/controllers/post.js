const { Post } = require('../models');
const { post } = require('../routes/post');



/*post function */

exports.createPost = (req, res) => {
    console.log(req.body)
    let imageUrl = null
    let post = req.body
    if (req.file) {
        post = JSON.parse(post.post);
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
exports.getAllPosts = (res) => {
    console.log("Get all posts");
    post.find().then(
        (result) => {
            res.status(200).json(result);
        }
    ).catch(error => {
        res.status(400).json({
            error: error
        })
    })
};
