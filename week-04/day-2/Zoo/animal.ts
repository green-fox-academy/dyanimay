export abstract class animal{
    protected _name: string;
    protected _age: number;
    protected _legNumber: number;
    protected _friend: number;

    constructor(name: string, age?: number, legNumber?: number, friend?: number){
        this._name = name;
        this._age = age;
        this._legNumber = legNumber;
        this._friend = friend;
    }

    getName(): string{ //getName and breed are NOT VOID, they are STRING because we want to get back =return a string as zoo.app console.logs it
        return (this._name);
    };

    abstract breed(): string; //if there is "abstract" it means we don't even want to give any meaning to this breed function, without abstract: void{} means that it is a function which does nothing.
}

export class Reptile extends animal{
    constructor(name: string){
        super(name);
    }
    breed(): string{ //if breed is public here, it should be public in animals, too
        return ('laying eggs.');
    }
}

export class Mammal extends animal{
    constructor(name: string){
        super(name);
    }
    breed(): string{
        return ('pushing miniature versions out.');
    }
}

export class Bird extends animal{
    constructor(name: string){
        super(name);
    }
    breed(): string{
        return ('laying eggs.')
    }
}