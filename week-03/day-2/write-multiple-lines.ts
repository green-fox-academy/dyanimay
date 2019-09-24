// Create a function that takes 3 parameters: a path, a word and a number
// and is able to write into a file.
// The path parameter should be a string that describes the location of the file you wish to modify
// The word parameter should also be a string that will be written to the file as individual lines
// The number parameter should describe how many lines the file should have.
// If the word is 'apple' and the number is 5, it should write 5 lines
// into the file and each line should read 'apple'
// The function should not raise any errors if it could not write the file.
const fs = require('fs');

function writeMultipleLines(path: string, word: string, lineNumber: number) {
  try {
    for (let i = 0; i <= lineNumber; i++) {
      if (i < lineNumber) {
        fs.appendFileSync(path, `${word}\n`, 'utf8');
      } else {
        fs.appendFileSync(path, word, 'utf8');
      }
    }
  } catch {
    console.log('Do not raise any error');
  }
}
// let path = 'my-file.txt';
// let word = 'I have to study more';
// let lineNumer = 10;
writeMultipleLines('my-file.txt', 'I have to study more', 10);