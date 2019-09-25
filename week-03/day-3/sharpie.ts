'use strict'

class Sharipe {
    private color: string;
    private width: number;
    private inkAmount: number;

    constructor (color:string, width: number, inkamount:number = 100) {
        this.color = color;
        this.width = width;
        this.inkAmount = inkamount;
    }

    public use(): void {
        this.inkAmount -= this.width;
    }
}
let sharpie = new Sharipe ('black', 20);
sharpie.use();
console.log(sharpie);