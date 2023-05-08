const { Router } = require("express")
const LevelsController = require("../controllers/LevelsController")

const router = Router()

router.get('/levels', LevelsController.getLevels)
router.get('/level/:id', LevelsController.getLevel)
router.post('/newlevel', LevelsController.createLevel)
router.put('/updatelevel/:id', LevelsController.updateLevel)
router.delete('/deletelevel/:id', LevelsController.deleteLevel)

module.exports = router