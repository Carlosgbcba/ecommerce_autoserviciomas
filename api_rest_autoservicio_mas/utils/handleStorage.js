const multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        const pathSorage = `${__dirname}/../storage`;
        cb(null, pathSorage)
    },
    filename: function(req, file, cb){
        const ext = file.originalname.split('.').pop() 
        const filename = `file-${Date.now()}.${ext}` 
        cb(null, filename)
    }
})

const uploadMiddleware = multer({storage})

module.exports = uploadMiddleware