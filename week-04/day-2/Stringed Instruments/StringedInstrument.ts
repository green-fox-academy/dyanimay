import {Instrument} from './Instrument';

export abstract class StringedInstrument extends Instrument{
    protected _numberOfStrings: number;

    constructor(numberOfString?: number, name?: string){
        super(name);
        this._numberOfStrings = numberOfString;
    }

    protected sound(): void{ //we dont write anything here because we don't know the sounds yet - implementation yet unknown
    }

    play () {
        console.log(this._name + ', a ' + this._numberOfStrings + '-stringed instrument that goes ' + this.sound()) //this.sound is empty here, but as we are adding the classes/instruments from descendant, they have their own sound there so THAT sound come to THIS (empty) sound, as we are "deeper"
    }

}