import {Person} from './Person';

export class Woman extends Person{
    private _breastSize: number;

    constructor(age: number, name: string, height:number, breastSize: number){
        super(age, name, height);
        this._breastSize = 50;
    }

    // public introduce(): void {
    //     console.log('Hi, my name is ' + this._name + '. I am ' + this._height + ' tall and ' + this._age + ' years old and I have ' + this._breastSize + ' size boobies');
    // } CODE DUPLICATION

    protected specificIntroduction(): string {
        return ' and ' + this._breastSize + ' size breasts.'
    }
}