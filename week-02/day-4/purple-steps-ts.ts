'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r3.png]

function rainbow(x:number, y:number){
ctx.fillStyle = 'purple';
ctx.fillRect(x * y, x * y, y, y);
ctx.strokeRect(x * y, x * y, y, y);
}
let y:number = 10;
for (let x: number = 1; x <= 20; x++){
    rainbow(x, y);
}