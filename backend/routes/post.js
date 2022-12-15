const express = require('express');
const router = express.Router();
const postCtrl = require('../controllers/post');
const auth = require('../middleware/auth')
const multer = require('../middleware/multer-config')


router.post('/', multer, postCtrl.createPost);
// router.get('/',auth, multer,postCtrl.getAllPosts);


module.exports = router;