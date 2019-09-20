'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

const div: number = 1;
const num: number = 10;
const w: number = canvas.width;
const h: number = canvas.height;

function lines(x1: number, y1: number, x2: number, y2: number) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}
for (let sor: number = 0; sor <= div; sor++) {
    for (let oszlop: number = 0; oszlop <= div; oszlop++) {
       
        for (let i: number = 1; i < num; i++) {
            if (oszlop ===1 ){
                console.log(((w / div) - (h / div)) + sor * (w/div));
            } else {
                continue;
            }
            let x: number = i * (w / div) / (num - 1);
            let y: number = i * (h / div) / (num - 1);
            lines(((w / div) - (h / div)) + sor * (w/div), y + sor * (w/div), x + sor * (w/div), (h / div) + sor * (w/div));
            ctx.strokeStyle = 'green';
            
        }
        for (let i: number = 1; i < num; i++) {
            if (oszlop ===1 ){
                console.log(((w / div) - (h / div)) + sor * (w/div));
            } else {
                continue;
            }
            let x: number = i * (w / div) / (num - 1);
            let y: number = i * (h / div) / (num - 1);
            lines((h / div) + sor * (w/div), y + sor * (w/div), x + sor * (w/div), ((w / div) - (h / div)) + sor * (w/div));
            ctx.strokeStyle = 'purple';
        }
    }
}
/*for (let i:number = 1; i < num; i = i + 1){
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
}*/