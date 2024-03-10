import multer from "multer";
import {v4 as uuidv4} from "uuid";
import path from "path";
const multerStorage = new multer.diskStorage({
    filename:(req,file,cb)=>{
        cb(null,uuidv4()+Date.now()+path.extname(file.originalname));
    },
    destination:(req,file,cb)=>{
        cb(null,"uploads/Companies");
    }
})

const fileTypeCheck = (file,cb)=>{
    let fileTypes = /jpeg|jpg|png/;
    let extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
    let mimeType = fileTypes.test(file.mimetype);
    if(extName && mimeType){
        return cb(null,true);
    }else{
        cb("Error : ou can only upload images !!");
    }
}

const CompanyAvatars = multer({storage:multerStorage,fileFilter:(req,file,cb)=>{
    fileTypeCheck(file,cb);
}});

export default CompanyAvatars;