import { Thing } from './thing';
import { Fleet } from './fleet';

let fleet = new Fleet();

let getMilk = new Thing ('Get Milk');
let remove = new Thing ('Remove the obstacles');
let standUp = new Thing ('Stand Up');
let eatLunch = new Thing ('Eat Lunch');
standUp.complete();
getMilk.complete();

fleet.add(getMilk);
fleet.add(remove);
fleet.add(standUp);
fleet.add(eatLunch);

// -  You have the `Thing` class
// -  You have the `Fleet` class
// -  Create the `FleetOfThings` class with a `main` method
// -  Download those, use those
// -  In the `main` method create a fleet
// -  Achieve this output:
//  Crete a fleet of things to have this output:

// 1. [ ] Get milk
// 2. [ ] Remove the obstacles
// 3. [x] Stand up
// 4. [x] Eat lunch

// Hint: You have to create a `print()` method as well 
class FleetOfThings {
    private number:number = 1;
    private fleet: any [];
    private 

    constructor 
}