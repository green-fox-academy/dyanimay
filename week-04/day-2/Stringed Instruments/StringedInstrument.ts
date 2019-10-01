import {Instrument} from './Instrument';

export abstract class StringedInstrument extends Instrument{
    protected _numberOfStrings: number;

    constructor(name?: string, numberOfString?: number){
        super(name);
        this._numberOfStrings = numberOfString;
    }

    protected sound(): void{ //we dont write anything here because we don't know the sounds yet - implementation yet unknown
    }

    play () {
        console.log(this._name + ', a ' + this._numberOfStrings + '-stringed instrument that goes ')
    }

}