interface Flyable{
    land(): void;
    fly(): void;
    takeOff(): void;
}

abstract class Vehicle{
    protected _name: string;
    protected _color: string;
    protected _seatNumber: number;
    protected _doorNumber: number;
}

class Helicopter extends Vehicle{ //how to extend from Vehicle and inherit Flyable interface at the same time??

    constructor(name: string, color: string, seatNumber: number, doorNumber: number){
        super();
    }
}