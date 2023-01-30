const playerOne = document.querySelector("#greenBtn");
const playerTwo = document.querySelector("#blueBtn");
const reset = document.querySelector("#resetBtn");
let score1 = 0;
let score2 = 0;
let maxScore = document.querySelector("#scores").value;
const scr1 = document.querySelector("#score1");
const scr2 = document.querySelector("#score2");

document.querySelector("#scores").addEventListener("change", function () {
    maxScore = document.querySelector("#scores").value;

})
playerOne.addEventListener("click", function () {
    score1++;

    scr1.innerText = score1;
    if (score1 == maxScore) {
        scr2.style.color = "red";
        scr1.style.color = "green";
        playerOne.disabled = "true";
        playerTwo.disabled = "true";
    }
})

playerTwo.addEventListener("click", function () {
    score2++;
    scr2.innerText = score2;
    if (score2 == maxScore) {
        scr2.style.color = "green";
        scr1.style.color = "red";
        playerOne.disabled = "true";
        playerTwo.disabled = "true";
    }
})


reset.addEventListener("click", function () {
    init_val();
})


function init_val() {
    score1 = 0;
    score2 = 0;
    scr1.innerText = 0;
    scr2.innerText = 0;
    maxScore = document.querySelector("#scores").value;
    scr1.style.color = "black";
    scr2.style.color = "black";
    playerOne.disabled = 0;
    playerTwo.disabled = 0;
}
