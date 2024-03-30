const user = require("./../../model/userModal")
const payment = require("./../../model/paymentModal")

const createUser = async (req, res) => {
    try {
        console.log(req.file)
        req.body.screenShot = req.file.filename
        const newUser = new user(req.body)
        console.log(newUser)
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