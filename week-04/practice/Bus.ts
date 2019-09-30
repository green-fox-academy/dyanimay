import {Person} from './Person';

export class Bus {
    private _passengers: Person[];

    constructior() {
        this._passengers = [];
    }

    public getOn(person: Person){
        this._passengers.push(person);
    }

    public introduceAll(): void {
        this._passengers.forEach(function(element){
            element.introduce();
        })
        //this._passengers.forEach((element) => element.introduce()); IT IS THE SAME
    }
}