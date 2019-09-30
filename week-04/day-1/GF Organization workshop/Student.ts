import {Person} from './Person';

export class Student extends Person{
    protected _previousOrganization: string;
    protected _skippedDays: number;

    constructor (name?: string, age?: number, gender?: string, previousOrganization: string = 'The School of Life', skippeddays: number = 0){
        super(name, age, gender);
        this._previousOrganization = previousOrganization;
        this._skippedDays = skippeddays;
    }

    getGoal(): void {
        console.log('My goal is: Be a junior software developer.');
    }

    introduce(): void {
        console.log('Hi, I\'m ' + this._name + ', a ' + this._age + ' year old ' + this._gender + ' from ' + this._previousOrganization + ' who skipped ' + this._skippedDays + ' days from the course already.');
    }

    skipDays(numberOfDays?): void{
        this._skippedDays += numberOfDays; //here was a mistake because I wrote this.skipDays but the test.ts didn't work. 
    }
}