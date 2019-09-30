const fs = require('fs');

function writeMultipleLines(path: string, word: string, lineNumber: number) {
  try {
    for (let i = 0; i <= lineNumber; i++) {
        fs.writeFileSync(path, word, 'utf8');
    }
  } catch {
    console.log('Do not raise any error');
  }
}
// let path = 'my-file.txt';
// let word = 'I have to study more';
// let lineNumer = 10;
writeMultipleLines('demo.txt', 'I have to study more', 10);