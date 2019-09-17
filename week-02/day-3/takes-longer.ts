'use strict';
// While saving this quote, a disk error has occured. Please fix it.
// Add "always takes longer than" between the words "It" and "you"

let quote: string = `Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.`;
let fix: string = 'always takes longer than ';
let fixedQuote: string = [quote.slice(0, 21), fix, quote.slice(21)].join('');

console.log(fixedQuote);