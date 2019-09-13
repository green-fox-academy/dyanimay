let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables
let totalSecondsADay: number = 86400;
console.log("The current time is: " + currentHours + ":" + currentMinutes + ":" + currentSeconds);
console.log("Only " + (totalSecondsADay - (currentSeconds + currentMinutes*60 + currentHours*60*60)) + " seconds left from today.");