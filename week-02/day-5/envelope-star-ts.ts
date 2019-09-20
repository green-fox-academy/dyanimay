'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

const num:number = 20;
const w:number = canvas.width;
const h:number = canvas.height;

function lines2(x1: number, y1: number, x2: number, y2:number){
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = 'green';
    ctx.stroke();
}
for (let i:number = 1; i < num-1; i = i + 1){
    let x:number = i * (w/2) / (num - 1);
    let y:number = i * (h/2) / (num - 1);
    lines2 (200, h - y , 200 + x, h/2);
}
for (let i:number = 1; i < num; i = i + 1){
    let x:number = i * (w/2) / (num - 1);
    let y:number = i * (h/2) / (num - 1);
    lines2 (200, 200 + y , x, h/2);
    ctx.strokeStyle = 'yellow';
}
for (let i:number = 1; i < num-1; i = i + 1){
    let x:number = i * (w/2) / (num - 1);
    let y:number = i * (h/2) / (num - 1);
    lines2 (200, y , 200 + x, h/2);
    ctx.strokeStyle = 'blue';
}
for (let i:number = 1; i < num; i = i + 1){
    let x:number = i * (w/2) / (num - 1);
    let y:number = i * (h/2) / (num - 1);
    lines2 (200, 200 - y , x, h/2);
    ctx.strokeStyle = 'red';
}