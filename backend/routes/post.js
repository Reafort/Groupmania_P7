const express = require('express');
const router = express.Router();
const postCtrl = require('../controllers/post');
const auth = require('../middleware/auth')
const multer = require('../middleware/multer-config')



router.post('/',auth, multer, postCtrl.createPost);
router.get('/',auth, multer, postCtrl.getAllPosts);
router.put('/:id',auth, postCtrl.readBy);


module.exports = router