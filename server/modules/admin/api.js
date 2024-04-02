const router = require("express").Router()
const { getUser, adminLogin, getContent, deletePayment, createPayment, updatePayment, createCourse, deleteCourse, updateCourse, createTiming, deleteTiming, updateTiming } = require('./controller')

router.get("/user", getUser)
router.post("/login", adminLogin)

router.get("/content", getContent)

router.post("/payment", createPayment)
router.delete("/payment", deletePayment)
router.put("/payment", updatePayment)

router.post("/course", createCourse)
router.delete("/course", deleteCourse)
router.put("/course", updateCourse)

router.post("/timing", createTiming)
router.delete("/timing", deleteTiming)
router.put("/timing", updateTiming)

module.exports = router
