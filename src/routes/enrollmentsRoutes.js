const { Router } = require("express")
const EnrollmentsController = require("../controllers/EnrollmentsController")

const router = Router()


router.get('/people/:personid/enrollment/:enrollmentid', EnrollmentsController.getEnrollment)
router.get('/people/enrollment/:classid/confirmed', EnrollmentsController.getEnrollmentbyClasses)
router.get('/people/enrollment/full', EnrollmentsController.getFullClasses)
router.post('/people/:personid/enrollment', EnrollmentsController.createEnrollment)
router.post('/people/:personid/enrollment/:enrollmentid/restore', EnrollmentsController.restoreEnrollment)
router.put('/people/:personid/enrollment/:enrollmentid', EnrollmentsController.updateEnrollment)
router.delete('/people/:personid/enrollment/delete/:enrollmentid', EnrollmentsController.deleteEnrollment)


module.exports = router