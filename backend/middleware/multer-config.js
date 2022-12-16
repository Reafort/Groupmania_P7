const multer = require('multer');

const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png',
    'image/gif': 'gif',
    'video/mp4': 'mp4'
};

const storage = multer.diskStorage({ //method tells express where to store files to the disk     
    destination: (req, file, callback) => {
        callback(null, 'images');
    },
    filename: (req, file, callback) => { //indicates thr name of thr files
        const name = file.originalname
        const extension = MIME_TYPES[file.mimetype];
        callback(null, name + Date.now() + '.' + extension)
    }
});


module.exports = multer({ storage: storage }).single('file'); //config step