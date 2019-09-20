'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

const divide:number = 1;
const num:number = 20;
const w:number = canvas.width;
const h:number = canvas.height;

function lines(x1: number, y1: number, x2: number, y2:number){
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}
for (let i:number = 1; i < num; i = i + 1){
    let x:number = i * w / (num - 1);
    let y:number = i * h / (num - 1);
    lines (0, y, x, h);
    ctx.strokeStyle = 'green';
}
for (let i:number = 1; i < num; i = i + 1){
    let x:number = i * w / (num - 1);
    let y:number = i * h / (num - 1);
    lines (h, y, x, 0);
    ctx.strokeStyle = 'purple';
}