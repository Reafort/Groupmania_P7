const { Post } = require('../models');



/*post function */
//TODO look up project 6 how sauces are created (create and modify sauces) changing mongoose to sequelize.
exports.createPost = (req, res, next) => {
    console.log(req.body)
    // const url = req.protocol + '://' + req.get('host');
    Post.create({
        message: req.body.message,
        userId: req.body.userId,
        // imageUrl: url + '/images/' + req.file.filename,
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

//TODO create exports.getallPost