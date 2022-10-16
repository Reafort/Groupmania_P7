const { User } = require('../models');
const bcrypt = require ('bcrypt');
const jwt = require('jsonwebtoken');


/** sign up function */
exports.signup = (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then(
    (hash) => {
      const user = new User({
        name:req.body.name,
        email:req.body.email,
        password: hash
    });
  user.save().then(
    () => {
      res.status(201).json({
        message:"User added successfully!"
      });
    }
  ).catch (
    (error) => {
      res.status(500).json({
        error:error
      });
    })
})
};

exports.getAll = (req, res, next) => {
  User.findAll().then(data => {
    res.send(data)
  }).catch(err => {
    res.status(500).send({
      message: err.message
    })
  })
}
