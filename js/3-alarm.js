// Alarm
// Write a program that asks a user for the amount of seconds needed until an alarm (message) is executed alongside a text to show once those seconds have passed in real time.

// Result example: "Time for bed after 10 seconds".
let seconds = 0;

do {
    seconds = prompt("Set the amount of seconds for the alarm:");
} while (isNaN(seconds));

const text = prompt("Set the text to show once those seconds have passed in real time.");

seconds = Number(seconds);
let miliSeconds = 1000*seconds;

setTimeout(() => {
    alert(text);
}, miliSeconds);