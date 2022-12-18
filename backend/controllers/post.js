const { Post } = require('../models');



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
        console.log(error);
        res.status(500).json({
            error: error,
        });
    }
    );
}
exports.getAllPosts = (req, res) => {
    console.log("Get all posts");
    Post.findAll(
        { order: [["createdAt", "DESC"]] }
    ).then(
        (result) => {
            res.status(200).json(result);
        }
    ).catch(error => {
        res.status(500).json({
            error: error
        })
    })
};

//readby post

exports.readBy = (req, res) => {
    console.log("readBy");
    const postId = req.params.id;
    Post.findOne(
        { where: { id: postId } }
    ).then(
        post => {
            if (!post) {
                res.status(404).json({ error: 'Post not found' });

            } else {
                ///TODO update post found with breadby userId (if not already read by user)
                console.log()
                res.status(200).send({ success: 'OK' });
            }
        }

    ).catch(error => {
        res.status(500).json({ error })
    })
}