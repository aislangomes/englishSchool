const database = require('../models')

class Services {
  constructor(modelName) {
    this.modelName = modelName
  }
  
  async getAllRegisters(where = {}) {
    return database[this.modelName].findAll({where: {...where}})
  }

  async getRegister(where = {}) {
    return database[this.modelName].findOne({where: {...where}})    
  }

  async createRegister(data) {
    return database[this.modelName].create(data)
  }

  async updateRegister(updateData, id, transc = {}) {
    return database[this.modelName].update(updateData, {where: {id: id}}, transc)
  }

  async deleteRegister(id) {
    return database[this.modelName].destroy({ where: {id: id} })
  }

  async restoreRegister(id) {
    return database[this.modelName].restore({where: {id: id}})
  }

  async getDeletedRegister(id){
    return database[this.modelName].findOne({paranoid: false, where: {id: Number(id)}})
  }

  async findCountRegister(where = {}, adc) {
    return database[this.modelName].findAndCountAll({where:{...where}, ...adc})
  }

}

module.exports = Services