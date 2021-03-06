
// Variables

var question = document.getElementById('question');
var choices = Array.from(document.getElementsByClassName('choice-text'));
var progressText = document.getElementById('progressText');
var scoreText = document.getElementById('score')
var progressBarFull = document.getElementById('progressBarFull')
var username = document.getElementById('username');
console.log(choices)

// Changing Variables

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

// Timer 
var time = 60
var timer = document.getElementById('time')

getTime = () => {


time--
console.log(time)
timer.textContent = time
if( time <= 0) {

    return window.location.assign('end.html');


}

}

setInterval(getTime, 1000)

// Questions Array

let questions = [
    {
        question: 'Inside which HTML element do we put the JavaScript??',
        choice1: '<script>',
        choice2: '<javascript>',
        choice3: '<js>',
        choice4: '<scripting>',
        answer: 1,
    },
    {
        question:
            "What is the correct syntax for referring to an external script called 'xxx.js'?",
        choice1: "<script href='xxx.js'>",
        choice2: "<script name='xxx.js'>",
        choice3: "<script src='xxx.js'>",
        choice4: "<script file='xxx.js'>",
        answer: 3,
    },
    {
        question: " How do you write 'Hello World' in an alert box?",
        choice1: "msgBox('Hello World');",
        choice2: "alertBox('Hello World');",
        choice3: "msg('Hello World');",
        choice4: "alert('Hello World');",
        answer: 4,
    },
    {
        question: "Finding and fixing code problems is known as...",
        choice1: "coding;",
        choice2: "programming;",
        choice3: "debugging;",
        choice4: "scrubbing;",
        answer: 3,
    },

    {
        question: "Which of the following is NOT part of the HTML DOM",
        choice1: "HTML elements as objects;",
        choice2: "Properties of all HTML elements;",
        choice3: "Styling of all HTML elements;",
        choice4: "Methods to access all HTML elements",
        answer: 3,
    },

];


// Constants

const Correct_Bonus = 10;
const Max_Questions = 5;

// Start of Game Generate Questions

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion();
};


getNewQuestion = () => {

    if(availableQuestions.length === 0 || questionCounter >= Max_Questions || time === 0) {
        localStorage.setItem('mostRecentScore', score)



    // Go to The End Page

    return window.location.assign('end.html');

    }

    questionCounter++;
    progressText.innerText = questionCounter + "/" + Max_Questions;

    // Update The Progress Bar

    progressBarFull.style.width = `${(questionCounter/Max_Questions) * 100}%`;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length)
        currentQuestion = availableQuestions[questionIndex];
        question.innerText = currentQuestion.question;

        choices.forEach( choice => {

            const number = choice.dataset['number']
            choice.innerText = currentQuestion['choice' + number]
        });

        availableQuestions.splice(questionIndex, 1)
        

        acceptingAnswers = true;
}

choices.forEach(choice => {

    choice.addEventListener('click', e => {

        if(!acceptingAnswers) return;

        acceptingAnswers = false;

        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number']

        const classToApply = 
        selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if(classToApply === 'correct') {
            incrementScore(Correct_Bonus);
        }
        
        if(classToApply === 'incorrect') {
            time -= 5
        }


        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout( () => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000)

    })
})



incrementScore = num => {
    score += num;
    scoreText.innerText = score;

}


// Calls Game to Start

startGame();