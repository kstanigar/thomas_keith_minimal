// Income Ticker Display (displaying every 8seconds
var questionTicker = 10;
var questionTicker1 = 10;
var questionTicker2 = 10;
var questionTicker3 = 10;
var questionTicker4 = 10;

window.setInterval(function () {
    if (questionTicker > 0)
        questionTicker--;
    document.getElementById("questionTicker").innerHTML = "Wait for your first Question : " + questionTicker;
    if (questionTicker <= 0)
        questionTicker = 10;
}, 1000);

window.setInterval(function () {
    if (questionTicker1 > 0)
        questionTicker1--;
    document.getElementById("questionTicker1").innerHTML = "Wait for the Next Question In : " + questionTicker1;
    if (questionTicker1 <= 0)
        questionTicker1 = 10;
}, 1000);

window.setInterval(function () {
    if (questionTicker2 > 0)
        questionTicker2--;
    document.getElementById("questionTicker2").innerHTML = "Wait for the Next Question In : " + questionTicker2;
    if (questionTicker2 <= 0)
        questionTicker2 = 10;
}, 1000);

window.setInterval(function () {
    if (questionTicker3 > 0)
        questionTicker3--;
    document.getElementById("questionTicker3").innerHTML = "Next Question In : " + questionTicker3;
    if (questionTicker3 <= 0)
        questionTicker3 = 10;
}, 1000);

window.setInterval(function () {
    if (questionTicker4 > 0)
        questionTicker4--;
    document.getElementById("questionTicker4").innerHTML = "Re-introduction In : " + questionTicker4;
    if (questionTicker4 <= 0)
        questionTicker4 = 10;
}, 1000);