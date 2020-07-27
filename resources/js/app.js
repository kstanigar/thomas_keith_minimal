// Income Ticker Display (displaying every 10seconds
var questionTicker = 11;

window.setInterval(function () {
    if (questionTicker > 0)
        questionTicker--;
    document.getElementById("questionTicker").innerHTML = "Next Question In : " + questionTicker;
    if (questionTicker <= 0)
        questionTicker = 11;
}, 1000);