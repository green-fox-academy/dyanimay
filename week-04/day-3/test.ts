interface FlyAble{
  fly(): void;
  land?(): void;

  readonly flySpeed: number;
}

interface SpeakAble{
  speak(): void;
}

abstract class Animal{
  public abstract speak();

  constructor(){
      //this is valid.
  }
}

class Dog{
  public speak(){
      console.log("Woof woof");
  }
}

class Cat{
  public speak(){
      console.log("Meow");
  }
}

class Eagle extends Animal implements FlyAble, SpeakAble{
  public flySpeed: number;
  
  public fly(): void{
      console.log("I'm flying");
  }

  public land(): void{
      console.log("I'm landing");
  }

  public speak(): void{
      console.log("Screeeech");
  }
}

//let animal = new Animal(); this is not allowed
//animal.speak();

abstract class Plant{
 public abstract getType(): string; 
}

class Flower extends Plant{
  public getType():string{
      return "Flower"
  }

}

class Tree extends Plant{
  public getType():string{
      return "Tree"
  }  
}

let t1 = new Tree();
let f1 = new Flower();

let p: Plant[] = [t1, f1];
p.forEach(function(element){
  element.getType();
});



//The yellow Flower doesn't need water


function somethingWithAnEagle(eagle: FlyAble){
  eagle.fly();
  //eagle.speak();
  eagle.land();
}

let bird: FlyAble = {
  flySpeed: 50,
  fly: function(){console.log("Fly")}
}

let bird2 = {
  flyspeed: 60
}

function something(flyable: FlyAble){
  //flyable.flySpeed = 55; it doesn't work because it's readonly.
  console.log(flyable.flySpeed)
}

something(bird);