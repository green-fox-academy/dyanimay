'use strict'

class Counter {

    private integer: number;

    constructor (integer:number = 0) {
       this.integer = integer;
    }

    public add(number?: number) {
        if (number){
            this.integer += number;
        } else {
            this.integer ++;
        } // itt jelölöm az IF függvénnyel hogy ha nem írok be semmit (kérőjel miatt opcionális), akkor csak egyet adjon hozzá (++), ha beírok numbert akkor a numberrel növelje meg
    }

    public get(): string {
        return this.integer.toString();
    }

    public reset(): void {
        this.integer = 0;
    }
}
let numero = new Counter ();
numero.add(4);
console.log(numero);
numero.reset(); //nem működik itt a console.log

// numero.get();    ez ugyanaz mint alatta, így lehet összevonni
// console.log(numero);
console.log(numero.get());