const router = require("express").Router()
const { createUser } = require('./controller')
const upload = require('./../../middleware/fileUpload')

router.post("/user", upload.single('screenShot'), createUser)

module.exports = router