// https://www.w3schools.com/howto/howto_js_countdown.asp
// Set the date we're counting down to
var countDownDate = new Date("Jun 1, 2023 00:00:01").getTime();
var countDownDate2 = new Date("Dec 18, 2022 00:00:01").getTime();
const options = {weekday: 'long', year: 'numeric', month: '2-digit', day: '2-digit' };

// Update the count down every 1 second
function calc_count() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    hours = hours.toString()
    hours = hours.length == 1 ? 0 + hours : hours;

    minutes = minutes.toString()
    minutes = minutes.length == 1 ? 0 + minutes : minutes;

    seconds = seconds.toString()
    seconds = seconds.length == 1 ? 0 + seconds : seconds;

    // Display the result in the element with id="demo"
    document.getElementById("lillyback").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s (${new Date(countDownDate).toLocaleDateString('de-DE', options)})`;

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("lillyback").innerHTML = "LILLY IS BACK";
    }
    display_countdown();
};

function calc_count2() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate2 - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    hours = hours.toString()
    hours = hours.length == 1 ? 0 + hours : hours;

    minutes = minutes.toString()
    minutes = minutes.length == 1 ? 0 + minutes : minutes;

    seconds = seconds.toString()
    seconds = seconds.length == 1 ? 0 + seconds : seconds;

    // Display the result in the element with id="demo"
    document.getElementById("lillyback2").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s (${new Date(countDownDate2).toLocaleDateString('de-DE', options)})`;

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("lillyback2").innerHTML = "LILLY IS BACK";
    }
    display_countdown();
};

function display_countdown() {
    countdown = setTimeout('calc_count()', refresh);
    countdown = setTimeout('calc_count2()', refresh);
    var refresh = 250; // Refresh rate in milliseconds
}

display_countdown()