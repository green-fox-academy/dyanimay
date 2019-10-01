import {Instrument} from './Instrument';
import {StringedInstrument} from './StringedInstrument';

export class ElectricGuitar extends StringedInstrument{
    constructor (name: string = 'Electric Guitar', numberOfStrings: number = 6){
        super(name, numberOfStrings);
    }
    protected sound (){
        return 'Twang';
    }
}

export class BassGuitar extends StringedInstrument{
    constructor (name:string = 'Bass Guitar', numberOfStrings: number = 4){
        super(name, numberOfStrings);
    }
    protected sound (){
        return 'Duum-duum-duum';
    }
}

export class Violin extends StringedInstrument{
    constructor (name: string = 'Violin', numberOfStrings: number = 4){
        super(name, numberOfStrings);
    }
    protected sound (){
        return 'Screech';
    }
}