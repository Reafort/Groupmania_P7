const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/post');
const auth = require('../middleware/auth')


router.post('/',auth, postCtrl.createPost); 