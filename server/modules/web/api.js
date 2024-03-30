const router = require("express").Router()
const { createUser, getPaymentModes } = require('./controller')
const upload = require('./../../middleware/fileUpload')

router.post("/user", upload.single('ssFile'), createUser)
router.get("/payment", getPaymentModes)

module.exports = router