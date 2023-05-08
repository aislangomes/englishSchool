const Services = require('../services/Services')
const levelServices = new Services('levels')

class LevelsController {
  static async getLevels(req, res) {
    try {
      const allLevels = await levelServices.getAllRegisters()
      return res.status(200).json(allLevels)
    }
    catch (err) {
      return res.status(500).json(err.message)
    }    
  }
  static async getLevel(req, res) {
    const {id} = req.params
    try{      
      const level = await levelServices.getRegister({id})
      return res.status(200).json(level)
    }
    catch (err) {
      return res.status(500).json(err.message)
    }  
  }
  static async createLevel(req, res) {
    const newLevel = req.body
    try {
      const newCreatedLevel = await levelServices.createRegister(newLevel)
      return res.status(200).json(newCreatedLevel)

    }
    catch (err) {
      return res.status(500).json(err.message)
    }     
  }
  static async updateLevel(req, res) {
    const {id} = req.params
    const newInfo = req.body
    try {
      await levelServices.updateRegister(newInfo, id)
      return res.status(200).json({message: `ID ${id} updated`})
    }
    catch (err) {
      return res.status(500).json(err.message)
    }     
  }
  static async deleteLevel(req, res) {
    const {id} = req.params
    try {
      await levelServices.deleteRegister(id)
      return res.status(200).json({message: `Level ${id} deleted`})
    }
    catch (err) {
      return res.status(500).json(err.message)
    }     
  }
  static async restoreLevel(req, res){
    const {id} = req.params
    try{
      await levelServices.restoreRegister(id)
      return res.status(200).json({message: `Level ${id} restored`})
    }
    catch (err) {
      return res.status(500).json(err.message)
    }
  }
}

module.exports = LevelsController;