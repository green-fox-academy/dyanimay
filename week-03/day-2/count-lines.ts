// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.
const fs = require('fs');
function countingLines(filename:string){
    try {
        let fileContent2 = fs.readFileSync('my-file.txt', 'utf-8');
        let lines2 = fileContent2.split ('\n')
        console.log(lines2.length);
    }
    catch(error) {
        console.log('0');
    }
}
countingLines('my-file.txt');