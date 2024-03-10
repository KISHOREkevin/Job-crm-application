import multer from "multer";
import path from "path";
import {v4 as uuidv4} from "uuid";
let multerStorage = multer.diskStorage({
    filename:(req,file,cb)=>{
        cb(null,Date.now()+uuidv4()+path.extname(file.originalname));
    },
    destination:(req,file,cb)=>{
        cb(null,"uploads/Users");
    }
})

let checkFileType = (file,cb)=>{
    let fileTypes = /jpeg|jpg|png/;
    let extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
    let mimeTypes = fileTypes.test(file.mimetype);
    if(mimeTypes && extName){
        return cb(null,true);
    }else{
        cb("Error : You can only upload images !!");
    }
}

const UserAvatars = multer({storage:multerStorage,fileFilter:(req,file,cb)=>{
    checkFileType(file,cb);
}})

export default UserAvatars;