const { Router } = require("express")
const PeopleController = require("../controllers/PeopleController")

const router = Router()

router.get('/people', PeopleController.getAllPeople)
router.get('/people/active', PeopleController.getActivePeople)
router.get('/people/:id', PeopleController.getActivePerson)
router.get('/people/:id/enrollment', PeopleController.getEnrollmentStudents)
router.post('/people/create', PeopleController.createPerson)
router.post('/people/:id/cancel', PeopleController.cancelPerson)
router.post('/people/restore/:id', PeopleController.restorePerson)
router.put('/people/update/:id', PeopleController.updatePerson)
router.delete('/people/delete/:id', PeopleController.deletePerson)

module.exports = router