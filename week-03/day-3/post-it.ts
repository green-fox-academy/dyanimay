'use strict'

class postIt {
    private backgroundColor: string;
    private text: string;
    private textColor: string;
    
    constructor(backgroundcolor: string, text: string, textcolor: string) {
        this.backgroundColor = backgroundcolor;
        this.text = text;
        this.textColor = textcolor;
    }
}
let postIt1 = new postIt ('orange', 'Idea1', 'blue');
let postIt2 = new postIt ('pink', 'Awesome', 'black');
let postIt3 = new postIt ('yellow','Superb!', 'green');

console.log(postIt1);
console.log(postIt2);
console.log(postIt3);