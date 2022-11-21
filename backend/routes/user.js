const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');


router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
//TODO add auth middleware for protected routes
router.delete('/:id',userCtrl.delete);
// router.get('/', userCtrl.getAll);

module.exports = router;