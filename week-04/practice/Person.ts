export class Person {
    protected _age: number;
    protected _name: string;
    protected _height: number;

    constructor (age: number, name: string, height: number) {
        this._age = age;
        this._name = name;
        this._height = height;
    }

    public introduce(): void {
        console.log('Hi, my name is ' + this._name + '. I am ' + this._height + ' tall and ' + this._age + ' years old.')
    }

    // public instroduce(greet: string): void {
    //     console.log(greet + ', my name is ' + this._name + '. I am ' + this._height + ' tall and ' + this._age + ' years old.')
    // }
}