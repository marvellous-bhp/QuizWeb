const express = require('express');
const router = express.Router();
const data = require('../models/database');
const quizController = require('../controllers/quiz')



router.get('/start', quizController.question);

router.get('/finish/:corA', async(req, res) => {
    let quiz = data;
    let corA = req.params.corA;
    console.log("data",'quiz');
  res.render('finish', { quiz, corA })
})

router.post('/:id', quizController.checkQuestion);


router.get('/:id/:corNum', quizController.nextQuestion);




module.exports = router