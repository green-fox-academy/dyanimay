'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
const topLeftX:number = (50);
const topLeftY:number = (50);
const topRightX:number = (250);
const topRightY:number = (50);
const bottomLeftX:number = (50);
const bottomLeftY:number = (250);
const bottomRightX:number = (250);
const bottomRightY:number = (250);

// draw a box that has different colored lines on each edge.
ctx.strokeStyle = 'RBG(55, 55, 55)';
ctx.beginPath();
ctx.moveTo(topLeftX, topLeftY);
ctx.lineTo(topRightX, topRightY);
ctx.stroke();

ctx.strokeStyle = 'RGB(11, 11, 11)';
ctx.beginPath();
ctx.moveTo(topRightX, topRightY);
ctx.lineTo(bottomRightX, bottomRightY);
ctx.stroke();

ctx.strokeStyle = 'RGB(111, 111, 111';
ctx.beginPath();
ctx.moveTo(bottomRightX, bottomRightY);
ctx.lineTo (bottomLeftX, bottomLeftY);
ctx.stroke();

ctx.strokeStyle = 'RGB(123, 123, 123';
ctx.beginPath();
ctx.moveTo(bottomLeftX, bottomLeftY);
ctx.lineTo(topLeftX, topLeftY);
ctx.stroke();