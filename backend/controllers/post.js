const { Post } = require('../models');


/*post function */
//TODO look up project 6 how sauces are created (create and modify sauces) changing mongoose to sequelize.
exports.createPost = (req, res, next) => { 
    let body = JSON.parse(req.body.post)
    if(body.message && body.userId) {
    const post = new Post({
        message: body.message,
        userId: body.userId,
        imageUrl:body.imageUrl
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
    } else {
        res.status(400).json({
            error: "error"
        })
    }
}