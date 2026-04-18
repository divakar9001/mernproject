const multer = require('multer');
const crypto = require('crypto');
const path = require('path');
const filestorage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'./uploads');
    },

    filename: function(req,file,cb){
        crypto.randomBytes(12,function(err,byts){
            const fn = byts.toString("hex") + path.extname(file.originalname)
            cb(null,fn);
        })
    }

});

const upload = multer({
    storage:filestorage
})

module.exports = upload