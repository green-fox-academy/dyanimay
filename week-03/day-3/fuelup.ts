'use strict'

class Car{ //this is the class (osztál), which is the skeleton only without any specific info
    private _fuelLevel: number; //by default it is public
    private _capacity: number;

    // constructor(fuelLevel: number){
    //     this.fuelLevel = fuelLevel;
    // }
    constructor(capacity?: number){ //with ? we made it optional, so it will work even if we don't write any argument down at "Car(20)"
        if (capacity) {
            this._capacity = capacity;
        } else {
            this._capacity = 100;
        }
        this._capacity = capacity;
        this._fuelLevel = 0;
        console.log('Car is created');
    }

    public isFull(): boolean{
        return this._fuelLevel == this._capacity;
    }

    public get FuelLevel(){
        return this._fuelLevel;
    }
    public set fuelLevel(fuelLevel:number){
        this._fuelLevel = fuelLevel;
    }
}

class Station{
    private _amount: number;
    private _capacity: number;

    constructor (amount: number) {
        this._amount = amount;
        this._capacity = 5000;
    }

    public fillCar(car: Car){ //this is how the association looks like
        //fill until it is full
        while(!car.isFull()){
            car.fill(1);
        }
    }
}

let audi = new Car(20); //this is an instance of the Car class (példány)

let opel = new Car(30); //this is another instance of the same Car class

for (let i:number = 0; i < 10 ; ++i){
    let car = new Car(10);
    if (i == 5){
        opel = car; // we overwrite the opel variable which means the opbjects in line 10 will not have any reference anymore
    } //ez a for loop csinál 10 autót és az 5.hez hozzárendeli az opel attribótumait. mivel a többi 9nek nincs semmije, ezért azt a 9et törli és ez a garbage collector. felszabadít feleslegesen használt memóriát
}

let Shell = new Station (2500);
Shell.fillCar(opel);