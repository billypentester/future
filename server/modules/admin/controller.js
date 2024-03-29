const user = require("./../../model/userModal")

const getUser = async (req, res) => {
    try {
        const users = await user.find()
        res.status(200).json(users)
    } 
    catch (error) {
        res.status(500).json(error)
    }
}

module.exports = { getUser }