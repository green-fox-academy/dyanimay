'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
const topLeftX:number = (canvas.width/2 - 5);
const topLeftY:number = (canvas.height/2 - 5);
const topRightX:number = (canvas.width/2 + 5);
const topRightY:number = (canvas.height/2 - 5);
const bottomLeftX:number = (canvas.width/2 -5);
const bottomLeftY:number = (canvas.height/2 + 5);
const bottomRightX:number = (canvas.width/2 + 5);
const bottomRightY:number = (canvas.height/2 + 5);
// Draw a green 10x10 square to the center of the canvas.
ctx.strokeStyle = 'green';
ctx.beginPath();
ctx.moveTo(topLeftX, topLeftY);
ctx.lineTo(topRightX, topRightY);
ctx.stroke();

ctx.strokeStyle = 'green';
ctx.beginPath();
ctx.moveTo(topRightX, topRightY);
ctx.lineTo(bottomRightX, bottomRightY);
ctx.stroke();

ctx.strokeStyle = 'green';
ctx.beginPath();
ctx.moveTo(bottomRightX, bottomRightY);
ctx.lineTo (bottomLeftX, bottomLeftY);
ctx.stroke();

ctx.strokeStyle = 'green';
ctx.beginPath();
ctx.moveTo(bottomLeftX, bottomLeftY);
ctx.lineTo(topLeftX, topLeftY);
ctx.stroke();