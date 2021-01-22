
// Variables

var highScoresList = document.getElementById('highScoresList')
var highScores = JSON.parse(localStorage.getItem('highScores'))  || [];

console.log(highScores);

// Logs High Scores on Page

highScoresList.innerHTML = (highScores
    
    // Converts Score Array

    .map( score => {

return (`<li class="high-score">${score.name}-${score.score}</li>`)
}).join("")
);
