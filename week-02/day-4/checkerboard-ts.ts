'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern.
function chess(row:number, column:number){
    ctx.fillRect(row * 50, column * 50, 50, 50);
    ctx.strokeRect(row * 50, column * 50, 50, 50);
    ctx.strokeStyle = 'black';
}
for (let row: number = 0; row < 8; row++){
    for (let column: number = 0; column < 8; column++){
        if (column % 2 == 0) {
            if (row % 2 == 0){
                ctx.fillStyle = 'black';
            } else {
                ctx.fillStyle = 'white';
            }
        } else {
            if (row % 2 == 0){
                ctx.fillStyle = 'white';
            } else {
                ctx.fillStyle = 'black';
            }
        } chess(row, column);
}
}