const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({ // create storage
    destination: (req, file, cb) => { // destination
        cb(null, path.join(__dirname, '../uploads')); // path to uploads
    },
    filename: (req, file, cb) => { // filename
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9); // unique suffix
        cb(null, uniqueSuffix + path.extname(file.originalname)); // unique suffix + extension
    }
});

const uploads = multer({  // create uploads
    storage: storage, // storage

});

module.exports = uploads; // export uploads
