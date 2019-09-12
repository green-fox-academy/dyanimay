'use strict';
let dailyHours: number = 6;
let semesterWeeks: number = 17;
let workDays: number = 5;
let avgWeeklyHours: number = 52;
// An average Green Fox attendee codes 6 hours daily
// The semester is 17 weeks long
//
// Print how many hours is spent with coding in a semester by an attendee,
// if the attendee only codes on workdays.
//
console.log("An attendee at Greenfox spends an average of " + (dailyHours*semesterWeeks*workDays) + " hours with coding in a semester.")

// Print the percentage of the coding hours in the semester if the average
// work hours weekly is 52
console.log("It means that " + ((dailyHours*workDays)/avgWeeklyHours*100).toFixed(2) + "% of the working hours are spent with creating the most awesome codes.")