let cloudinary = require("cloudinary").v2;
let streamifier = require('streamifier');

require('dotenv').config()

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

const uploadFromBuffer = (req) => {

    return new Promise((resolve, reject) => {
 
      let cld_upload_stream = cloudinary.uploader.upload_stream(
       {
         folder: "ss"
       },
       (error, result) => {
 
         if (result) {
           resolve(result);
         } else {
           reject(error);
          }
        }
      );
 
      streamifier.createReadStream(req.file.buffer).pipe(cld_upload_stream);
    });
 
};

module.exports = uploadFromBuffer;