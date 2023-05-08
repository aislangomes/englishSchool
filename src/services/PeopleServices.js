const Services = require('./Services')
const database = require('../models')

class PeopleServices extends Services {
  constructor(){
    super('people')
    this.enrollment = new Services('enrollment')
  }
  async getAllPeople(where = {}) {
    return database[this.modelName].scope('all').findAll({where: {...where}})
  }
  
  async getActivePeople(where = {}){
    return database[this.modelName].findAll({where: {...where}})
  }
  
  async getEnrollmentsbyStudents(where = {}) {
    const enrollment = await database[this.modelName].findOne({where:{...where}})
    console.log(enrollment)
    return enrollment.getCassSingned()
  }

  async cancelPeopleAndEnrollments(id) {
    return database.sequelize.transaction(async transc => {
      await super.updateRegister({active: false}, id, {transaction: transc})
      await this.enrollment.updateRegister({status: 'canceled'},{student_id: id},{transaction: transc})
    })
  } 
  

}

module.exports = PeopleServices