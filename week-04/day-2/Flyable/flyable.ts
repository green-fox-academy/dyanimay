import { Animal } from "../Zoo/animal"; //

//import {Bird, animal} from '../Zoo/animal' //double dot because we have to go back by one folder

interface Flyable {
  land(): void;
  fly(): void;
  takeOff(): void;
}

abstract class Vehicle {
  protected _name: string;
  protected _color: string;
  protected _seatNumber: number;
  protected _doorNumber: number;

  // constructor(name: string, color: string, seatNumber: number, doorNumber: number){
  //     this._name = name;
  //     this._color = color;
  //     this._seatNumber = seatNumber;
  //     this._doorNumber = doorNumber;
  // }
}

class Helicopter extends Vehicle implements Flyable { //how to extend from Vehicle and inherit Flyable interface at the same time??

  public land(): void { //it is void because the method does nothing, the land method doesn't return anything. console.log is != return
    console.log('Prepare for landing.');
  }
  public fly(): void {
    console.log('We are flying high.');
  }
  public takeOff(): void {
    console.log('Prepare for take off.');
  }

  constructor(name: string, color: string, seatNumber: number, doorNumber: number) {
    super();
  }
}
let BlackHawk = new Helicopter('Black Hawk', 'brown', 6, 5);
BlackHawk.land();

export class Bird extends Animal implements Flyable {

  public land(): void { }

  public fly(): void { }

  public takeOff(): void { }

  breed(): string { //this is needed here
    return ('laying eggs.');
  }
}