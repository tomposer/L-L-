var theme = document.getElementById("theme");

// https://www.w3schools.com/howto/howto_js_countdown.asp
// Set the date we're counting down to
var countDownDate = new Date("Jun 1, 2023 00:00:00").getTime();
var countDownDate2 = new Date("Dec 18, 2022 00:00:00").getTime();
var countDownDate2_5 = new Date("Jan 6, 2023 00:00:00").getTime();
var countDownDate3 = new Date("Sep 6, 2022 02:30:00").getTime();
const options = { weekday: 'long', year: 'numeric', month: '2-digit', day: '2-digit' };

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
        document.getElementById("lillyback").innerHTML = "LILLY IS BACK";
    }
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
    if (distance < 0 && countDownDate2_5 - now > 0) {
        document.getElementById("lillyback2").innerHTML = "LILLY IS BACK";
    }
    if (countDownDate2_5 - now < 0) {
        document.getElementById("lillyback2").innerHTML = "SCHEE WARS"
    }
};

function calc_count3() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = now - countDownDate3;

    // Time calculations for days, hours, minutes and seconds
    var days;
    if (Math.floor(distance / (1000 * 60 * 60 * 24)) == -1) {
        days = 0
    } else {
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    }
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    hours = Math.abs(hours).toString().length == 1 ? hours < 0 ? "-0" + Math.abs(hours).toString() : 0 + hours.toString() : hours.toString();
    minutes = Math.abs(minutes).toString().length == 1 ? minutes < 0 ? "-0" + Math.abs(minutes).toString() : 0 + minutes.toString() : minutes.toString();
    seconds = Math.abs(seconds).toString().length == 1 ? seconds < 0 ? "-0" + Math.abs(seconds).toString() : 0 + seconds.toString() : seconds.toString();

    // Display the result in the element with id="demo"
    document.getElementById("lillygone").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s (${new Date(countDownDate3).toLocaleDateString('de-DE', options)})`;

    // If the count down is finished, write some text
    if (document.getElementById("lillyback2").innerHTML === "LILLY IS BACK" || document.getElementById("lillyback").innerHTML === "LILLY IS BACK") {
        document.getElementById("lillygone").innerHTML = "LILLY IS BACK";
    }
};

function display_countdown() {
    countdown = setInterval('calc_count()', refresh);
    countdown = setInterval('calc_count2()', refresh);
    countdown = setInterval('calc_count3()', refresh);
    var refresh = 250; // Refresh rate in milliseconds
}



function loadTheme() {
    var style = localStorage.getItem('style');
    console.log(style);
    if (!style) {
        localStorage.setItem('style', "light-theme");
        style = localStorage.getItem('style');
    };
    theme.id = style;
}

function changeTheme() {
    var lighttheme = document.getElementById("light-theme")
    style = localStorage.getItem('style');


    if (lighttheme) {
        localStorage.setItem('style', "dark-theme");

        style = localStorage.getItem('style');
        theme.id = style;
    }
    else {
        localStorage.setItem('style', "light-theme");

        style = localStorage.getItem('style');
        theme.id = style;
    }
}




display_countdown()
loadTheme();