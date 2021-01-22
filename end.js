//Variables

var username = document.getElementById('username');
var saveScoreBtn = document.getElementById('saveScoreBtn');
var finalScore = document.getElementById('finalScore');
var mostRecentScore = localStorage.getItem('mostRecentScore')

// Logs High Score Array

var highScores= JSON.parse(localStorage.getItem("highScores")) || [] ;
console.log(highScores);


finalScore.innerText = mostRecentScore;

var maxHighScores = 5;
console.log(highScores);
// console.log(JSON.parse(localStorage.getItem('highScores')) || []);



username.addEventListener('keyup', () => {

//Disables Save Btn until username is inputted
    console.log(username.value)
    saveScoreBtn.disabled = !username.value;

});

saveHighScore = (e) => {

    console.log("clicked the save button");
    e.preventDefault();

    var score = {

        score: Math.floor(Math.random() * 100),
        name: username.value

    };

    // Sorts Through High Scores

    highScores.push(score);

    // Sorts Scores based on points received
    highScores.sort( (a,b) =>  b.score - a.score);

    // Sets Cut off for top High Scores
    highScores.splice(3);

    //Updates Local Storage
    localStorage.setItem('highScores', JSON.stringify(highScores));
    //Takes user home after saving score
    window.location.assign("index.html");
    
    console.log(highScores)

};