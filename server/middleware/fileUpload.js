const multer = require('multer');
const path = require('path')

const fileNameGenerator = () => {
    const date = new Date()
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}-${Math.round(Math.random() * 1E9)}`
}

// const storage = multer.diskStorage({
//     destination: function(req, file, cb) {
//         cb(null, 'public/uploads')
//     },
//     filename: function(req, file, cb) {
//         cb(null, fileNameGenerator() + path.extname(file.originalname)) 
//     }
// })

const storage = multer.memoryStorage();

const upload = multer({ storage: storage })

module.exports = upload