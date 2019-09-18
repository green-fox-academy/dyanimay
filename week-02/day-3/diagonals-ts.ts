'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
const topLeftX:number = (0);
const topLeftY:number = (0);
const topRightX:number = (600);
const topRightY:number = (0);
const bottomLeftX:number = (0);
const bottomLeftY:number = (400);
const bottomRightX:number = (600);
const bottomRightY:number = (400);
// Draw the canvas' diagonals.
// If it starts from the upper-left corner it should be green, otherwise it should be red.
ctx.strokeStyle = 'green';
ctx.beginPath();
ctx.moveTo(topLeftX,topLeftY);
ctx.lineTo(bottomRightX, bottomRightY);
ctx.stroke();

ctx.strokeStyle = 'red';
ctx.beginPath();
ctx.moveTo(topRightX,topRightY);
ctx.lineTo(bottomLeftX,bottomLeftY);
ctx.stroke();