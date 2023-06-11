const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
// const bcrypt = require('bcrypt')

const data = require('./models/database');

const app = express()
// const path = require('path')
const port = 3331

const quizRouter = require('./routes/quiz');


// Set up body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/question', quizRouter)

//view
app.set('view engine', 'ejs')

//app conf
app.use(express.static('public'));
app.use(express.static('helpers'));

// 

app.get('/', async (req, res) => {

  res.render('index', {  })
})


app.listen(port, () => {
  console.log(`port ${port}`);
});


