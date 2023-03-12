import path from 'path'
import multer from 'multer';

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'uploads/post')
    },
    filename: function(req, file, cb){
        let ext = path.extname(file.originalname);
        cb(null, Date.now() + ext);
    }
})


export const upload = multer({
    storage,
    fileFilter: function(req, file, callback){
        if (file.mimetype == "image/png" || file.mimetype == "image/jpeg" || file.mimetype == "image/jpg"){
            callback(null, true)
        }else{
            console.log('u can upload file only with extname jpg, jpeg, png');
            callback(null, false)
        }
    },
    limits: {
        fileSize: 1024 * 1024 * 10
    }
})
