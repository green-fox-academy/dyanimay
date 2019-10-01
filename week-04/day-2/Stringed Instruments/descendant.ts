import {Instrument} from './Instrument';
import {StringedInstrument} from './StringedInstrument';

export class ElectricGuitar extends StringedInstrument{
    constructor (numberOfStrings: number = 6, name: string = 'Electric Guitar'){
        super(numberOfStrings, name);
    }
    protected sound (){
        return 'Twang';
    }
}

export class BassGuitar extends StringedInstrument{
    constructor (numberOfStrings: number = 4, name:string = 'Bass Guitar'){
        super(numberOfStrings, name);
    }
    protected sound (){
        return 'Duum-duum-duum';
    }
}

export class Violin extends StringedInstrument{
    constructor (numberOfStrings: number = 4, name: string = 'Violin'){
        super(numberOfStrings, name);
    }
    protected sound (){
        return 'Screech';
    }
}