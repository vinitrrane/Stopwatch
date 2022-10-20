
// Initilizing Digits

var mins = 00;
var secs = 00;
var millis = 00;

//Targeting Time Digits

var getMin = document.querySelector('.mins');
var getSec = document.querySelector('.secs');
var getMill = document.querySelector('.millis');

//Targeting Buttons

var btnStart = document.getElementById('btnStart');
var btnStop = document.getElementById('btnStop');
var btnReset = document.getElementById('btnReset');

//Adding Button Events

btnStart.addEventListener('click', funSta);
btnStop.addEventListener('click', funSto);
btnReset.addEventListener('click', funRes);

// Initilizing Interval to use later

var interval;

// Start Button Function

function funSta() {

    clearInterval(interval);

    interval = setInterval(startTimer, 15);

    var blink = document.querySelectorAll('.blink');

    for (i = 0; i < blink.length; i++) {
        blink[i].className += " bliSt";
    }

}

// Stop Button Function

function funSto() {

    clearInterval(interval);

    var blink = document.querySelectorAll('.blink');

    for (i = 0; i < blink.length; i++) {
        blink[i].className = "blink";
    }

}

// Reset Button Function

function funRes() {
    clearInterval(interval);
    mins = "00";
    secs = "00";
    millis = "00";
    getMin.innerHTML = mins;
    getSec.innerHTML = secs;
    getMill.innerHTML = millis;

    var blink = document.querySelectorAll('.blink');

    for (i = 0; i < blink.length; i++) {
        blink[i].className = "blink";
    }

}

// Main funtion to start/stop/reset timer

function startTimer() {
    millis++;

    // console.log(millis);
    if (millis <= 9) {

        getMill.innerHTML = "0" + millis;
    }
    if (millis > 9) {

        getMill.innerHTML = millis;
    }
    if (millis > 99) {
        secs++;

        getSec.innerHTML = "0" + secs;

        millis = "0";

        getMill.innerHTML = "0" + 0;
    }
    if (secs > 9) {

        getSec.innerHTML = secs;
    }
    if (secs > 59) {
        mins++;

        getMin.innerHTML = "0" + mins;

        secs = "0";

        getSec.innerHTML = "0" + 0;
    }
    if (mins > 59) {

        getMin.innerHTML = "0" + mins;
    }

}