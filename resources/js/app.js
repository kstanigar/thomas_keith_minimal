// Income Ticker Display (displaying every 8seconds
var questionTicker = 12;
var questionTicker1 = 12;
var questionTicker2 = 12;
var questionTicker3 = 12;
var questionTicker4 = 12;

window.setInterval(function () {
    if (questionTicker > 0)
        questionTicker--;
    document.getElementById("questionTicker").innerHTML = "WAIT for your first Question : " + questionTicker;
    if (questionTicker <= 0)
        questionTicker = 12;
}, 1000);

window.setInterval(function () {
    if (questionTicker1 > 0)
        questionTicker1--;
    document.getElementById("questionTicker1").innerHTML = "WAIT for the Next Question : " + questionTicker1;
    if (questionTicker1 <= 0)
        questionTicker1 = 12;
}, 1000);

window.setInterval(function () {
    if (questionTicker2 > 0)
        questionTicker2--;
    document.getElementById("questionTicker2").innerHTML = "WAIT for the Next Question : " + questionTicker2;
    if (questionTicker2 <= 0)
        questionTicker2 = 12;
}, 1000);

window.setInterval(function () {
    if (questionTicker3 > 0)
        questionTicker3--;
    document.getElementById("questionTicker3").innerHTML = "WAIT for the Next Question : " + questionTicker3;
    if (questionTicker3 <= 0)
        questionTicker3 = 12;
}, 1000);

window.setInterval(function () {
    if (questionTicker4 > 0)
        questionTicker4--;
    document.getElementById("questionTicker4").innerHTML = "Re-introduction : " + questionTicker4;
    if (questionTicker4 <= 0)
        questionTicker4 = 12;
}, 1000);