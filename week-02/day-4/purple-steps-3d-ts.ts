'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r4.png]

function rainbowGrow(x:number, y:number){
    ctx.fillStyle = 'purple';
    ctx.fillRect(x * y / 2, x * y / 2, y, y);
    ctx.strokeRect(x * y / 2, x * y / 2, y, y);
    }
    let y = 5;
    for (let x: number = 1; x <= 6; x++){
        y = y + 5;
        rainbowGrow(x, y);
    }
