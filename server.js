import express from 'express'
import { students } from './data/students-data.js'

const app = express()

app.set('view engine', 'ejs')

app.get('/', function(req, res) {
  res.render('home')
})

app.get('/students', function(req, res) {
  res.render('school/students', {
    students : students
  })
})

app.listen(3000, function() {
  console.log('Server is up and running on port 3000')
})
