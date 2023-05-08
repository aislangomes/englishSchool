'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class enrollment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      enrollment.belongsTo(models.people, {
        foreignKey: 'student_id'
      })
      enrollment.belongsTo(models.classes, {
        foreignKey: 'classes_id'
      })
    }
  }
  enrollment.init({
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'enrollment',
    paranoid: true
  });
  return enrollment;
};