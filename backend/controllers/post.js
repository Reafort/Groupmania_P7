const { Post } = require('../models/post');



/*post function */
//TODO look up project 6 how sauces are created (create and modify sauces) changing mongoose to sequelize.
exports.createPost = (req, res, next) => {
    console.log(req.body)
    const body = JSON.parse(req.body.post);
    // const url = req.protocol + '://' + req.get('host');
    const post = new Post({
        message: body.message,
        userId: body.userId,
        // imageUrl: url + '/images/' + req.file.filename,
    });
    console.log(post)
    post.save().then(
        () => {
            res.status(201).json({
                message: "Post added sucessfully!"
            });
        }
    ).catch(
        (error) => {
            res.status(500).json({
                error: error
            });
        }
    );
}