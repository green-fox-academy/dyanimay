'use strict';
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a function that draws a single line and takes 2 parameters:
// the x and y coordinates of the line's starting point
// and draws a 50 long horizontal line from that point.
// Draw at least 3 lines with that function using a loop.
function drawing2(x:number, y:number){
    ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x+50, y);
    ctx.stroke();
}

for (let i:number = 0; i < 3; i = i + 1){ //i = hány vonalat húzzon
    let l:number = i * 100 + 50; //l = kezdőpozíció az i-ből kiszámolva, minél nagyobbal szorzom annál ritkább
        drawing2(l , l);
}
