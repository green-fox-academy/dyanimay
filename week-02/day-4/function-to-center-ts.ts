'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.
function lines(x: number, y: number){
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(canvas.width/2, canvas.height/2);
    ctx.stroke();
}
let y:number = 0;
for (let x: number = 0; x <= 600; x = x + 20){
    lines(x, y);
}
let x = 600;
for (y = 0; y <= 400; y = y + 20){
    lines(x, y);
}
y = 400;
for (x = 0; x <= 600; x = x + 20){
    lines(x, y);
}
x = 0;
for (y = 0; y <= 400; y = y + 20){
    lines(x, y);
}