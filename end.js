const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore')


const highScores= JSON.parse(localStorage.getItem("highScores")) || [] ;
console.log(highScores);


finalScore.innerText = mostRecentScore;

// const maxHighScores = 5;
// console.log(highScores);
// console.log(JSON.parse(localStorage.getItem('highScores')) || []);



username.addEventListener('keyup', () => {

//Disables Save Btn until username is inputted
    console.log(username.value)
    saveScoreBtn.disabled = !username.value;

});

saveHighScore = (e) => {

    console.log("clicked the save button");
    e.preventDefault();

    const score = {

        score: mostRecentScore,
        name: username.value

    };

    highScores.push(score);
    console.log(highScores)

};