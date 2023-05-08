const Sequelize = require('sequelize')
const Services = require('../services/Services')
const enrollmentsServices = new Services()

class EnrollmentsController {
  static async getEnrollment(req, res) {
    const { studentId, enrollmentId } = req.params
    try {
      const enrollment = await enrollmentsServices.getRegister({id: enrollmentId, studentId: studentId})
      return res.status(200).json(enrollment)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
  static async createEnrollment(req, res) {
    const {personid} = req.params
    const newenrollment = {...req.body, student_id: Number(personid)}
    try {
      const newCreatedEnrollment = await enrollmentsServices.createRegister(newenrollment)
      return res.status(200).json(newCreatedEnrollment)
    }
    catch (err) {
      return res.status(500).json(err.message)
    }     
  }

  static async updateEnrollment(req, res) {
    const {personid, enrollmentid} = req.params
    const newInfo = req.body
    try {
      await enrollmentsServices.updateRegisters(newInfo, {id: Number(enrollmentid),student_id: Number(personid)})
      return res.status(200).json(updateEnrollment)
    }
    catch (err) {
      return res.status(500).json(err.message)
    }     
  }

  static async deleteEnrollment(req, res) {
    const {enrollmentid} = req.params
    try {
      await enrollmentsServices.deleteRegister(Number(enrollmentid))
      return res.status(200).json({message: "Enrollment was deleted"})
    }
    catch (err) {
      return res.status(500).json(err.message)
    }     
  }

  static async restoreEnrollment(req, res) {
    const {enrollmentid} = req.params
    try {
      await enrollmentsServices.restoreRegister(Number(enrollmentid))
      return res.status(200).json({message: "Enrollment was restored"})
    }
    catch (err) {
      return res.status(500).json(err.message)
    }     
  }

  static async getEnrollmentbyClasses(req, res) {
    const {id} = req.params
    try{
      const allEnrollments = await enrollmentsServices.findCountRegister(
        {classes_id: Number(id),status: 'confirmed'},
        {limit: 20, order:[['student_id', 'DESC']]})
        return res.status(200).json(allEnrollments)
    }
    catch (err) {
      return res.status(500).json(err.message)
    } 
  }

  static async getFullClasses(req, res) {
    const toFullClasses = 2
    try{
      const fullClasses = await enrollmentsServices.findCountRegister({status: 'confirmed'},
      {
        attributes: ['classes_id'],
        group: ['classes_id'],
        having: Sequelize.literal(`count(classes_id) >= ${toFullClasses}`)
      })
      return res.status(200).json(fullClasses.count)
    }
    catch (err) {
      return res.status(500).json(err.message)
    }  
  }
}

module.exports = EnrollmentsController;