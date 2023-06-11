const data = require('../models/database');

function creatRandomQuiz() {
  let quiz = [];
  for (let i = 0; i < data.length; i++) {
    let element = data[i];
    let randomNumber = Math.floor(Math.random() * 4);
    answers = element.incorrect_answers;
    // console.log(answers.indexOf(element.correct_answer)===-1,'check');
    if (answers.indexOf(element.correct_answer)===-1) {
        element.incorrect_answers.splice(randomNumber, 0, element.correct_answer);
      }
    // console.log('element',element);
    let lenArr = quiz.length + 1;
    let randomIndex = Math.floor(Math.random() * lenArr);
    quiz.splice(randomIndex, 0, element);
    // console.log(quiz,randomIndex,'quizzz');
  }
  return quiz
}

  let newQuiz = creatRandomQuiz();
  let quiz = newQuiz.map((item,index)=>{
    return {...item,id: index + 1}
  })

exports.question = async (req, res) => {
  let newQuiz = creatRandomQuiz();
  let quiz = newQuiz.map((item,index)=>{
    return {...item,id: index + 1}
  })
  // console.log(quiz[0],'newQuiz');
  let dataQ = JSON.stringify(quiz)
  let question = 1;
  
  res.render('quiz', { quiz, dataQ, question  })
};



exports.checkQuestion = async (req, res) => {
  
  // console.log(quiz[0],'newQuiz');
  let dataQ = JSON.stringify(quiz)
  let correctAnswer = req.body.correct;
  console.log(req.body,'............');
  // let question = req.params.id;
  // console.log('question',question);

  res.redirect(`/question/check/${correctAnswer}`)
  
};

exports.nextQuestion = async (req, res) => {
  
  // console.log(quiz[0],'newQuiz');
  let dataQ = JSON.stringify(quiz)
  let question = req.params.id;
  let correctAnswer = req.params.corNum;
  console.log('questioncoooooo',req);
  // let correctAnswer = 0;
  if(question>quiz.length){
    
  }
  else{
    res.render('quiz', { quiz, dataQ, question,correctAnswer })
  }
  
};