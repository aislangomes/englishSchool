const bodyParser = require("body-parser")
const people = require('./peopleRoutes')
const classes = require('./classesRoutes')
const levels = require('./levelsRoutes')
const enrollments = require('./enrollmentsRoutes')
 
module.exports = app => {
  app.use(
    bodyParser.json(),
    people,
    classes,
    levels,
    enrollments
    )
}