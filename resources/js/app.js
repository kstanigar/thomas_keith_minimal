// Income Ticker Display (displaying every 10seconds
var questionTicker = 7;
var questionTicker2 = 7;

window.setInterval(function () {
    if (questionTicker > 0)
        questionTicker--;
    document.getElementById("questionTicker").innerHTML = "Next Question In : " + questionTicker;
    if (questionTicker <= 0)
        questionTicker = 7;
}, 1000);

window.setInterval(function () {
    if (questionTicker2 > 0)
        questionTicker2--;
    document.getElementById("questionTicker2").innerHTML = "Next Question In : " + questionTicker2;
    if (questionTicker2 <= 0)
        questionTicker2 = 7;
}, 1000);