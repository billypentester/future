const user = require("./../../model/userModal")
const payment = require("./../../model/paymentModal")
let uploadFromBuffer = require('./../../utils/uploadBuffer')

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