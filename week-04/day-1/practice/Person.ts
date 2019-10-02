export class Person {
    protected _age: number; //it is protected, so we can change this parameters in woman.ts or elsewhere
    protected _name: string;
    protected _height: number;

    constructor (age: number, name: string, height: number) {
        this._age = age;
        this._name = name;
        this._height = height;
    }

    protected specificIntroduction(): string{
        return "";
    }

    public introduce(greet?: string): void{
        console.log( (greet != undefined ? greet : "Hi") + ", my name is " + this._name + " I am " +
                        this._height + " tall " + this._age + " old" + this.specificIntroduction());
    }
}