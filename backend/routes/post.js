const express = require('express');
const router = express.Router();
const postCtrl = require('../controllers/post');
const auth = require('../middleware/auth')
const multer = require('../middleware/multer-config')


//FIXME add auth middleware to all post routes
router.post('/', multer, postCtrl.createPost);
router.get('/', multer, postCtrl.getAllPosts);
router.put('/:id', postCtrl.readBy);


module.exports = router