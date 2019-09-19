'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with a rainbow of colored squares.
function rainbow(x:number, y: number){
    ctx.fillStyle = `rgb(${Math.floor(255 - y)}, ${Math.floor(3 * y)}, 0)`;
    ctx.fillRect(canvas.width/2-x/2, canvas.height/2-x/2, x, x);
}
for (let i:number = 8; 0 < i; i--){
    let x = i * 50;
    let y = i * 10;
    rainbow(x, y);
}/*
let y = 10
console.log(y * 40, y * 25, y * y);*/