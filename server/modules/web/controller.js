const user = require("./../../model/userModal")

const createUser = async (req, res) => {
    try {
        const newUser = new user(req.body)
        await newUser.save()
        res.status(201).send(newUser)
    } 
    catch (error) {
        res.status(500).send(error)
    }
}

module.exports = { createUser }