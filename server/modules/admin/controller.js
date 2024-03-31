const user = require("./../../model/userModal")
const timing = require("./../../model/timingModal")
const payment = require("./../../model/paymentModal")
const course = require("./../../model/courseModal")

const getUser = async (req, res) => {
    try {
        const users = await user.find()
            .populate('paymentMode')
            .populate('course')
            .populate('timing')
            .sort({ dateCreated: -1 })
        res.status(200).json(users)
    } 
    catch (error) {
        res.status(500).json(error)
    }
}

const getContent = async (req, res) => {
    try {
        const timingData = await timing.find()
        const paymentData = await payment.find()
        const courseData = await course.find()

        const data = { paymentData, timingData, courseData }
        res.status(200).json(data)
    } 
    catch (error) {
        res.status(500).json(error)
    }
}

const createPayment = async (req, res) => {
    try {
        const paymentData = await payment.create(req.body)
        res.status(200).json(paymentData)
    }
    catch (error) {
        res.status(500).json(error)
    }
}

const deletePayment = async (req, res) => {
    try {
        const paymentData = await payment.findByIdAndDelete(req.body.id)
        res.status(200).json(paymentData)
    }
    catch (error) {
        res.status(500).json(error)
    }
}

const updatePayment = async (req, res) => {
    try {
        const paymentData = await payment.findByIdAndUpdate(req.body._id, { $set: req.body }, { new: true })
        res.status(200).json(paymentData)
    }
    catch (error) {
        res.status(500).json(error)
    }
}

const createCourse = async(req, res) => {
    try {
        const courseData = await course.create(req.body)
        res.status(200).json(courseData)
    }
    catch (error) {
        res.status(500).json(error)
    }
}

const deleteCourse = async(req, res) => {
    try {
        const courseData = await course.findByIdAndDelete(req.body.id)
        res.status(200).json(courseData)
    }
    catch (error) {
        res.status(500).json(error)
    }
}

const updateCourse = async(req, res) => {
    try {
        const courseData = await course.findByIdAndUpdate(req.body._id, { $set: req.body }, { new: true })
        res.status(200).json(courseData)
    }
    catch (error) {
        res.status(500).json(error)
    }
}

const createTiming = async(req, res) => {
    try {
        const timingData = await timing.create(req.body)
        res.status(200).json(timingData)
    }
    catch (error) {
        res.status(500).json(error)
    }
}

const deleteTiming = async(req, res) => {
    try {
        const timingData = await timing.findByIdAndDelete(req.body.id)
        res.status(200).json(timingData)
    }
    catch (error) {
        res.status(500).json(error)
    }
}

const updateTiming = async(req, res) => {
    try {
        const timingData = await timing.findByIdAndUpdate(req.body._id, { $set: req.body }, { new: true })
        res.status(200).json(timingData)
    }
    catch (error) {
        res.status(500).json(error)
    }
}

module.exports = { 
    getUser, 
    getContent, 
    deletePayment, updatePayment, createPayment,
    createCourse, deleteCourse, updateCourse,
    createTiming, deleteTiming, updateTiming
}