const { post } = require('../models');



/*post function */
exports.post = (req, res, next) => {
    const post = new Post({
        message: req.body.message,
        userId: req.body.userId,
        imageUrl: req.body.imageUrl
    });
    console.log(post)
    user.save().then(
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
    )
}