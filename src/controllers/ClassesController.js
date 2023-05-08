const {Op} = require('sequelize')
const {ClassesServices} = require('../services/')
const classesServices = new ClassesServices()


class ClassesController {
  static async getClasses(req, res) {
    const {date_start, date_end} = req.query
    const where = {}
    date_start || date_end ? where.date_start = {} : null
    date_start ? where.date_start[Op.gte] = date_start : null
    date_end ? where.date_start[Op.lte] = date_end : null
    try {
      const allClasses = await classesServices.getAllRegisters(where)
      return res.status(200).json(allClasses)
    }
    catch (err) {
      return res.status(500).json(err.message)
    }    
  }
  static async getClass(req, res) {
    const {id} = req.params
    
    try{    
      const oneclass = await classesServices.getRegister({id})
      return res.status(200).json(oneclass)
    }
    catch (err) {
      return res.status(500).json(err.message)
    }  
  }

  static async createClass(req, res) {
    const newClass = req.body
    try {
      const newCreatedClass = await classesServices.createRegister(newClass)
      return res.status(200).json(newCreatedClass)

    }
    catch (err) {
      return res.status(500).json(err.message)
    }     
  }

  static async updateClass(req, res) {
    const {id} = req.params
    const newInfo = req.body
    try {
      await classesServices.updateRegister(newInfo, id)
      return res.status(200).json({message: `Id ${id} was update`})
    }
    catch (err) {
      return res.status(500).json(err.message)
    }     
  }
  static async deleteClass(req, res) {
    const {id} = req.params
    try {
      await classesServices.deleteRegister(id)
      return res.status(200).json({message: `Class ${id} was deleted`})
    }
    catch (err) {
      return res.status(500).json(err.message)
    }     
  }

  static async restoreClass(req, res) {
    const {id} = req.params
    try{
      await classesServices.restoreRegister(id)
      return res.status(200).json({message: `Class ${id} restored`})
    }
    catch (err) {
      return res.status(500).json(err.message)
    }  
  }
}

module.exports = ClassesController;