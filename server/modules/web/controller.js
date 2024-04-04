const user = require("./../../model/userModal")
const payment = require("./../../model/paymentModal")
let cloudinary = require("cloudinary").v2;
let streamifier = require('streamifier');

cloudinary.config({
    cloud_name: 'djt0rprdy',
    api_key: '427763133596996',
    api_secret: 'OoSWsFcvetpFy2ef2Kh-1RKbTDk'
});

let uploadFromBuffer = (req) => {

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

const createUser = async (req, res) => {
    try {
      const result = await uploadFromBuffer(req);
      req.body.screenShot = result.secure_url
      const newUser = new user(req.body)
      await newUser.save()
      res.status(201).json(newUser)
    } 
    catch (error) {
        res.status(500).json(error)
    }
}

const getPaymentModes = async (req, res) => {
    try {
        const paymentModes = await payment.find()
        res.status(200).json(paymentModes)
    } 
    catch (error) {
        res.status(500).json(error)
    }
}

module.exports = { createUser, getPaymentModes }