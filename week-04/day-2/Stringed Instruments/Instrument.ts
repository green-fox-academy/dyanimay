export abstract class Instrument {
    protected _name: string;

    constructor (name: string){
        this._name = name;
    }

    protected play(): void{} //we don't write anything here because we don't know the play funciont yet - implementaton yet unknown
}