const { Router } = require("express")
const ClassesController = require("../controllers/ClassesController")

const router = Router()

router.get('/classes', ClassesController.getClasses)
router.get('/class/:id', ClassesController.getClass)
router.post('/newclass', ClassesController.createClass)
router.put('/updateclass/:id', ClassesController.updateClass)
router.delete('/deleteclass/:id', ClassesController.deleteClass)

module.exports = router