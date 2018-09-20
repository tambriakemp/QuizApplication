'use strict'

const jsQuestions = [
    
{question: "Inside which HTML element do we put the JavaScript?", 
    a: "<js>" , 
    b: "<javascript>", 
    c: "<script>",
    d: "<scripting>"
}
  
//    {question: "What is the correct syntax for referring to an external script called 'xxx.js'?", 
//     a: "<script href='xxx.js'>", 
//     b: "<script name='xxx.js'>", 
//     c: "<script src='xxx.js'>",
//     d: "<script ='xxx.js'>"
// },    
//     {question: "How do you write 'Hello World' in an alert box?", 
//     a: "msgBox(‘Hello World’);", 
//     b: "alert(‘Hello World’);", 
//     c: "msg(‘Hello World’); ",
//     d: "alertBox(‘Hello World’);"
// },
//     {question: "How do you create a function in JavaScript?", 
//     a: "function = myFunction()", 
//     b: "function:myFunction()", 
//     c: "function myFunction()",
//     d: " myFunction()"
// },
//     {question: "How do you call a function named 'myFunction'?", 
//     a: "call myFunction()", 
//     b: "call function myFunction()", 
//     c: "myFunction()",
//     d: "myFunction.call()"
// },
//     {question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?", 
//     a: "if (i <> 5)", 
//     b: "if i =! 5 then", 
//     c: "if i <> 5",
//     d: "if (i != 5)"
// },
//     {question: "How to write an IF statement in JavaScript?", 
//     a: "if i = 5", 
//     b: "if i == 5 then", 
//     c: "if (i == 5)",
//     d: "if i = 5 then"
// },
//     {question: "How does a WHILE loop start?", 
//     a: "while (i <= 10; i++)", 
//     b: "while i = 1 to 10", 
//     c: "while (i <= 10)",
//     d: "while (i)"
// },
//     {question: "How does a FOR loop start?", 
//     a: "for i = 1 to 5", 
//     b: "for (i = 0; i <= 5)", 
//     c: "for (i = 0; i <= 5; i++)",
//     d: "for (i <= 5; i++)"
// },
//     {question: "How can you add a comment in a JavaScript?", 
//     a: "<!--This is a comment-->", 
//     b: "//This is a comment", 
//     c: "'This is a comment",
//     d: "!--This is a comment"
// } 
];

/* function getItemIndexFromElement(item) {
    const itemIndexString = $(item)
      .closest('.js-item-index-element')
      .attr('data-item-index');
    return parseInt(itemIndexString, 10);
  } */

//render start page 
function startQuiz () {
      $(document).ready(function () {
        $( ".start-page" ).append( `<div class="start">
            <img src="https://appendto.com/wp-content/uploads/2016/05/javascript-e1477353149155.png" alt="javascript logo">
            <h2>Javascript Quiz</h2>
            <p>Click the start button to start taking your Javascript quiz.</p>
            <button type="button" class="start-button" onclick="clickStartQuiz()">Start Quiz</button>
        </div>`);
    });
}

function clickStartQuiz () {
      $(".start").hide() 
      $(".questions").append( `<section class="question-right">
                <form>
                    <label></label>
                    <input type="radio" name="1" value=""> ${jsQuestions.question}
                    <input type="radio" name="2" value="">test
                    <input type="radio" name="3" value="">test
                    <input type="radio" name="4" value="">test
                </form>
                <button class="start">Submit</button>
        </section>`);
   
        
}



// function trackScore () {
//   let score = 0; 
//   if (response = = answer)
//     ++score; 
// }

/* 


function checkAnswer () {
//function to check if answer is correct 
}

function nextQuestion () {
//function to advance to the next question 
}

function displayScore () {
//function to display score
}

function startOver () {
//function to start quiz over

} */

function quizApp() {
    startQuiz();
  //   clickStartQuiz();
  // submitQuestion();

  }
  
  // when the page loads, call `handleShoppingList`
  $(quizApp);