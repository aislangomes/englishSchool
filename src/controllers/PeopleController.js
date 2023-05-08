const {PeopleServices} = require('../services')
const peopleServices = new PeopleServices()

class PeopleController {
  static async getAllPeople(req, res) {
    try {
      const allPeople = await peopleServices.getAllPeople()
      return res.status(200).json(allPeople)
    }
    catch (err) {
      return res.status(500).json(err.message)
    }    

  }

  static async getActivePeople(req, res) {
    try {
      const ActivePeople = await peopleServices.getActivePeople()
      return res.status(200).json(ActivePeople)
    }
    catch (err) {
      return res.status(500).json(err.message)
    }    
  }

  
  static async getActivePerson(req, res) {
    const {id} = req.params
    try{      
      const person = await peopleServices.getRegister({id})
      return res.status(200).json(person)
    }
    catch (err) {
      return res.status(500).json(err.message)
    }  
  }

  static async createPerson(req, res) {
    const newPerson = req.body
    try {
      const newCreatedPerson = await peopleServices.createRegister(newPerson)
      return res.status(200).json(newCreatedPerson)

    }
    catch (err) {
      return res.status(500).json(err.message)
    }     
  }

  static async updatePerson(req, res) {
    const {id} = req.params
    const newInfo = req.body
    try {
      await peopleServices.updateRegister(newInfo, Number(id))
      return res.status(200).json({message: `Id ${id} was updated.`})
    }
    catch (err) {
      return res.status(500).json(err.message)
    }     
  }
  static async cancelPerson(req, res) {
    const {id} = req.params

    try {
      await peopleServices.deleteRegister(id)
      return res.status(200).json({message: `ID ${id} was deleted`})
    }
    catch (err) {
      return res.status(500).json(err.message)
    }     
  }  
  static async restorePerson(req, res) {
    const { id } = req.params
    try {
      await peopleServices.restoreRegister(Number(id))
      return res.status(200).json({message: ` Restored person ID: ${id}`})
    }
    catch (err) {
      return res.status(500).json(err.message)
    }    
  }
  static async getEnrollmentStudents(req, res) {  
    const { id } = req.params
    try {
      const enrollments = await peopleServices.getEnrollmentsbyStudents({ id: Number(id) })
      return res.status(200).json(enrollments)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
  static async deletePerson(req, res) {  
    const { id } = req.params
    try {
      await peopleServices.cancelPeopleAndEnrollments(Number(id))
      return res.status(200).json({message: `Enrollments ref student ${id} canceled`}) 
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = PeopleController;