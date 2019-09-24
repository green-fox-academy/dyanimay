// Create a method that decrypts duplicated-chars.txt
const fs = require('fs');

let textFile: string = fs.readFileSync ('duplicated-chars.txt', 'utf8');
let textLines: string[] = textFile.split ('\n');
let textLetters: string [][] = textLines.map (function (e) {
    return e.split('');
})
let finalText:string [][] = [];

for (let i:number = 0; i < textLetters.length; i++) {
     for (let j:number = 0; j < textLetters[i].length; j++) {
         if ()
    }
}
console.log(finalText);
