import {Person} from './Person';

class Woman extends Person{
    private _breastSize: number;

    constructor(age: number, name: string, height:number, breastSize: number){
        super(age, name, height);
        this._age = 50;
    }
        
}