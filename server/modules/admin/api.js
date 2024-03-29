const router = require("express").Router()
const { getUser } = require('./controller')

router.get("/user", getUser)

module.exports = router
