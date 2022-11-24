const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


/** sign up function */

exports.signup = (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then(
    (hash) => {
      const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hash
      });
      console.log(user)
      user.save().then(
        () => {
          res.status(201).json({
            message: "User added successfully!"
          });
        }
      ).catch(
        (error) => {
          res.status(500).json({
            error: error
          });
        })
    })
};

/**login function */

exports.login = (req, res, next) => {
  User.findOne({ where: { email: req.body.email } }).then(
    (user) => {
      if (!user) {
        return res.status(401).json({
          error: new Error('User not found!')
        });
      }
      bcrypt.compare(req.body.password, user.password).then(
        (valid) => {
          if (!valid) {
            res.status(401).json({
              error: new
                Error('Incorrect password!')
            });
          }
          const token = jwt.sign({ userId: user._id }, 'SecretKey',
            { expiresIn: '24h' });
          res.status(200).json({
            userId: user.id,
            token: token
          })
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

/* Delete user account */
exports.delete = (req, res) => {
  if (req.params.id !== req.auth.userId) {
    throw 'Invalid user id'
  } else {
    next();
  }
  //check to see id from auth token is the same as id from req.params.id
  //NOTE the id from auth token is located at req.auth.userId
  const id = req.params.id //question
  User.findOne({ where: { id: id } }).then(  //question
    (user) => {
      if (!user) {
        return res.status(401).json({
          error: new Error('User not found!').message
        });
      }
      User.destroy({
        where: { id: id }
      }).then(
        () => {
          res.status(200).json({
            message: 'Deleted!'
          });
        }
      ).catch(
        (err) => {
          res.status(400).json({
            error: err.message
          });
        }
      );
    })

}
// exports.getAll = (req, res, next) => {
//   User.findAll().then(data => {
//     res.send(data)
//   }).catch(err => {
//     res.status(500).send({
//       message: err.message
//     })
//   })
// }
