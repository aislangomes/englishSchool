'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class people extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      people.hasMany(models.classes, {
        foreignKey: 'teacher_id'
    })
      people.hasMany(models.enrollment, {
        foreignKey: 'student_id',
        scope: {status: 'confirmed'},
        as: 'classSingned'
      })
    }
  }
  people.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        validationName: function (data) {
          if(data.length < 3) throw new Error('Name need more than 3 caracteres')          
        }
      }
    },
    active: DataTypes.BOOLEAN,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Data types email are invalid'
        },
      }
    },
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'people',
    paranoid: true,
    defaultScope: {
      where: {
        active: true,
      }
    },
    scopes: {
      all: {where: {}},

    }
  });
  return people;
};