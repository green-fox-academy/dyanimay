export abstract class Instrument {
    protected _name: string;

    constructor (name: string){
        this._name = name;
    }

    protected play(): void{}
}