'use strict'

class Animal {
    private hunger: number;
    private thirst: number;

    constructor (hunger:number = 50, thirst:number = 50){
        this.hunger = hunger;
        this.thirst = thirst;
    }

    public eat(): void {
        this.hunger -= 1; 
    }

    public drink(): void {
        this.thirst --;
    }

    public play(): void {
        this.hunger ++;
        this.thirst ++;
    }

    
}
let dog = new Animal ();
console.log(dog);
let cat = new Animal (10, 10);
cat.drink();
console.log(cat);
dog.play();
console.log(dog);