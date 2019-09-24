// Write a function that copies the contents of a file into another
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful
const fs = require('fs');

function copyContent (oldFile:string, newFile: string){
    try {
        let oldContent:string = fs.readFileSync('my-file.txt', 'utf-8');
        fs.writeFileSync ('my-new-file.txt', oldContent, 'utf-8');
    }
    catch {
        console.log('If ou see it, you should study more');
    }
}
copyContent('my-file.txt' , 'my-new-file.txt');