'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class classes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      classes.hasMany(models.enrollment, {
        foreignKey: 'classes_id'
      })
      classes.belongsTo(models.people, {
        foreignKey: 'teacher_id'
      })
      classes.belongsTo(models.levels, {
        foreignKey: 'level_id'
      })
    }
  }
  classes.init({
    date_start: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'classes',
    paranoid: true
  });
  return classes;
};