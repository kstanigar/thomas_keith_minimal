// Income Ticker Display (displaying every 8seconds
var questionTicker = 8;
var questionTicker2 = 8;

window.setInterval(function () {
    if (questionTicker > 0)
        questionTicker--;
    document.getElementById("questionTicker").innerHTML = "Next Question In : " + questionTicker;
    if (questionTicker <= 0)
        questionTicker = 8;
}, 1000);

window.setInterval(function () {
    if (questionTicker2 > 0)
        questionTicker2--;
    document.getElementById("questionTicker2").innerHTML = "Next Question In : " + questionTicker2;
    if (questionTicker2 <= 0)
        questionTicker2 = 8;
}, 1000);