'use strict';

let currentQuestion = 0; 
let score = 0;

//list of questions
const jsQuestions = [   
    {question: "Inside which HTML element do we put the JavaScript?", 
    a: "&lt;js&gt;", 
    b: "&lt;javascript&gt;", 
    c: "&lt;script&gt;",
    d: "&lt;scripting&gt;",
    correct: "c",
    userfeedback: null,
    userGuess: null
 },
    {question: "What is the correct syntax for referring to an external script called 'xxx.js'?", 
    a: "&lt;script href='xxx.js'&gt;", 
    b: "&lt;script src='xxx.js'&gt;", 
    c: "&lt;script name='xxx.js'&gt;",
    d: "&lt;script source='xxx.js'&gt;",
    correct: "b",
    userfeedback: null,
    userGuess: null
 },    
     {question: "How do you write 'Hello World' in an alert box?", 
     a: "msgBox(‘Hello World’);", 
     b: "alert(‘Hello World’);", 
     c: "msg(‘Hello World’); ",
     d: "alertBox(‘Hello World’);",
     correct: "b",
     userfeedback: null,
     userGuess: null
 },
     {question: "How do you create a function in JavaScript?", 
     a: "function = myFunction()", 
     b: "function:myFunction()", 
     c: "function myFunction()",
     d: " myFunction()",
     correct: "c",
     userfeedback: null,
     userGuess: null
 },
     {question: "How do you call a function named 'myFunction'?", 
     a: "call myFunction()", 
     b: "call function myFunction()", 
     c: "myFunction()",
     d: "myFunction.call()",
     correct: "c",
     userfeedback: null,
     userGuess: null
 },
     {question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?", 
     a: "if (i <> 5)", 
     b: "if i =! 5 then", 
     c: "if i <> 5",
     d: "if (i != 5)",
     correct: "d",
     userfeedback: null,
     userGuess: null
 },
     {question: "How to write an IF statement in JavaScript?", 
     a: "if i = 5", 
     b: "if i == 5 then", 
     c: "if (i == 5)",
     d: "if i = 5 then",
     correct: "c",
     userfeedback: null,
     userGuess: null
 },
     {question: "How does a WHILE loop start?", 
     a: "while (i <= 10; i++)", 
     b: "while i = 1 to 10", 
     c: "while (i <= 10)",
     d: "while (i)",
     correct: "c",
     userfeedback: null,
     userGuess: null
 },
     {question: "How does a FOR loop start?", 
     a: "for i = 1 to 5", 
     b: "for (i = 0; i <= 5)", 
     c: "for (i = 0; i <= 5; i++)",
     d: "for (i <= 5; i++)",
     correct: "c",
     userfeedback: null,
     userGuess: null
 },
     {question: "How can you add a comment in a JavaScript?", 
     a: "&lt;!--This is a comment-->", 
     b: "//This is a comment", 
     c: "'This is a comment",
     d: "!--This is a comment",
     correct: "b",
     userfeedback: null,
     userGuess: null
 }];

let jsLength = jsQuestions.length - 1;

//goes to first question in the quiz when start button selected
function handleStartButton () {
    $( '.start' ).on('click','.start-button', function (event) {
        displayQuestion (event);
        $('.start').hide();
        $('.quiz').show();
    });
    
}

//displays the question to the user
function displayQuestion (event) {
    
        $('.quiz').html( `
    <header>
    <div class="page-count"> Question ${(currentQuestion + 1 )} of  ${(jsQuestions.length)}</div>
    <div class="score-count"> Score ${(score)} out of ${(jsQuestions.length)}</div>
    </header>
    <section class="question-container">
        <form role="form">
            <p class="form-question">${jsQuestions[currentQuestion].question}</p>
                <label class="input-container">a: ${jsQuestions[currentQuestion].a}
                    <input type="radio" name="q" value="a" role="radio">
                </label>
                <label class="input-container">b: ${jsQuestions[currentQuestion].b}
                    <input type="radio" name="q" value="b" role="radio">
                </label>
                <label class="input-container">c: ${jsQuestions[currentQuestion].c}
                    <input type="radio" name="q" value="c" role="radio">
                </label>
                <label class="input-container">d: ${jsQuestions[currentQuestion].d}
                    <input type="radio" name="q" value="d" role="radio">
                </label> 
                <button type="submit" class="submit-button" role="button">Submit</button>
        </form>

    </section>
   `);

}

//Listener for handeling the guess of user
function handleSubmitQuestion() {
    $('.quiz').on('submit','form',function(event) {
      event.preventDefault();
      $("input[type=radio]").attr('disabled', true);
      
      const selectedAnswer = $('input[name=q]:checked').val()
      handleGuess(selectedAnswer)
    })
}

function handleGuess(selectedAnswer) {
    jsQuestions[currentQuestion].userGuess = selectedAnswer
  
// This is where the comparsion of user guess and actual answer
    if (jsQuestions[currentQuestion].userGuess === jsQuestions[currentQuestion].correct) {
        $('question-container').html(correctAnswerHTML());  
        incrementScore();
    } else {
        $('question-container').html(wrongAnswerHTML());
  }
}

function incrementScore () {
    score = score + 1;
}

//if the user gets the question right, this html is displayed
function correctAnswerHTML () {
    if (currentQuestion == jsLength) {
        $('.submit-button').hide();  
        $('.question-container').append( `<div class="question-result">
           <button type="button" class="next-question mobile-button" role="button">View Final Score</button></div> 
           <h3 class="result-placement">Correct!</h3>`);
    } else {
    $('.submit-button').hide();  
    $('.question-container').append( `<div class="question-result">
            <button type="button" class="next-question mobile-button" role="button">Next</button></div>
            <h5 class="result-placement">Correct!</h5>`);
    }
}

//if the user gets the question right, this html is displayed
function wrongAnswerHTML () {
    if (currentQuestion == jsLength){
        $('.submit-button').hide();  
        $('.question-container').append( `<div class="question-result">
            <button type="button" class="next-question mobile-button" role="button">View Final Score</button> </div>
            <h4 class="result-placement"><span>Wrong! </span>The correct answer is ${(jsQuestions[currentQuestion].correct)}</h4>`);
    } else {
    $('.submit-button').hide();  
    $('.question-container').append( `<div class="question-result">
            <button type="button" class="next-question mobile-button" role="button">Next</button> </div>
            <h4 class="result-placement"><span>Wrong! </span>The correct answer is ${(jsQuestions[currentQuestion].correct)}</h4>`);
    }
}

function handleNextQuestion () {
    $( '.right-side' ).on('click', '.next-question', function (){
        if (currentQuestion < jsLength ) {
            currentQuestion += 1; 
            console.log('next question');  
            displayQuestion (event);
        } else { 
            $('form').hide();
            $('.page-count').hide();
            $('.result-placement').hide()
            $('.score-count').hide();
            $('.next-question').hide();
            handleFinalScore();
        }  
    });
}

function handleFinalScore () {
    $('.see-final').hide();
    $('.question-result').html( `<div class="results">
        <h3>Final Score ${(score)} out of ${(jsQuestions.length)}</h3>
            <button type="button" class="restart-quiz" role="button">Restart Quiz</button>
        </div>`);
}

function handleRestartQuiz() {
    $( '.right-side' ).on('click', '.restart-quiz', function () {
        currentQuestion = 0;
        score = 0;
        displayQuestion();
  });
}

function quizApp() {
    handleStartButton();
    handleSubmitQuestion();
    handleNextQuestion ();
    handleFinalScore ();
    handleRestartQuiz ();
}
  
$(quizApp);

