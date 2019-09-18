'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.

function sqaures(x, y, width, height){
    ctx.beginPath();
    ctx.fillStyle = 'blue';
    ctx.fillRect(x, y, width, height);
    ctx.fill();
}
sqaures(50, 50, 30, 30);
sqaures(110, 110, 20, 20);
sqaures(150, 200, 25, 30);
sqaures(450, 300, 40, 100);

/* 2nd variation
function sqaures(x, y, w, h, color){
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
    ctx.fill();
}
sqaures(50, 50, 30, 30, "blue");
sqaures(110, 110, 20, 20, "red");
sqaures(150, 200, 25, 30, "orange");
sqaures(450, 300, 40, 100, "black");
*/