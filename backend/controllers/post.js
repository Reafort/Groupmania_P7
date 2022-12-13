const { Post } = require('../models');



/*post function */

exports.createPost = (req, res, next) => {
    console.log(req.body)
    if (req.file) {
        const post = JSON.parse(req.body.post);
        const url = req.protocol + '://' + req.get('host');
        Post.create({
            message: post.message,
            userId: post.userId,
            imageUrl: url + '/images/' + req.file.filename,
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
}

//TODO create exports.getallPost