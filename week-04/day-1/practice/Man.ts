import {Person} from './Person';

export class Man extends Person{
    private _penisSize: number;

    constructor(age: number, name: string, height:number, penisSize: number){
        super(age, name, height);
        this._penisSize = 20;
    }

    // public introduce(): void {
    //     console.log('Hi, my name is ' + this._name + '. I am ' + this._height + ' tall and ' + this._age + ' years old and I have ' + this._penisSize + ' size penis.');
    // } CODE DUPLICATION

    protected specificIntroduction(): string {
        return 'and ' + this._penisSize + ' long penis.'
    }
}