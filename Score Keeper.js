let score1 = document.getElementById("Player 1");
let score2 = document.getElementById("Player 2");
let button1 = document.getElementById("first");
let button2 = document.getElementById("second");
let button3 = document.getElementById("reset");
let maxscore = document.getElementById("maxScore");
let flag = false;


button1.addEventListener("click", () => {
    if (maxscore.value > score1.innerHTML && flag === false)
        score1.innerHTML++;
    if (maxscore.value == score1.innerHTML && flag === false) {
        flag = true;
        score1.style.color = "green";
        score2.style.color = "red";
        button1.style.backgroundColor = "#9AFFEF"
        button2.style.backgroundColor = "#47ACF3"

    }
})

button2.addEventListener("click", () => {
    if (maxscore.value > score2.innerHTML && flag == false)
        score2.innerHTML++;
    if (maxscore.value == score2.innerHTML && flag == false) {
        flag = true;
        score2.style.color = "green";
        score1.style.color = "red";
        button1.style.backgroundColor = "#9AFFEF"
        button2.style.backgroundColor = "#47ACF3"
    }
})

button3.addEventListener("click", () => {
    button1.style.backgroundColor = "aqua";
    button2.style.backgroundColor = "blue";
    score1.innerHTML = "0";
    score2.innerHTML = "0";
    score1.style.color = "black";
    score2.style.color = "black";
    flag = false;


})