class DiceSet {
    dice: number[];
    readonly numOfDices: number = 6; //6 kockám van
  
    roll(): number[] {
      this.dice = [];
      for (let i = 0; i < this.numOfDices; i++) {
        this.dice.push(Math.floor(Math.random() * 6 + 1)); //mathfloor lefele kerekít, mathrandom ad egy random számot 0-0,99 között
      }
      return this.dice;
    }
  
    reroll(index?: number): void { //dob az indexelt számú kockával, ha nem írok indexbe semmit akkor mindegyiket (mind a 6ot), újrad
      if (index === undefined) {
        for (let i = 0; i < this.numOfDices; i++) {
          this.dice[i] = Math.floor(Math.random() * 6 + 1);
        }
      } else {
        this.dice[index] = Math.floor(Math.random() * 6 + 1);
      }
    }
  
    getCurrent(index?: number): number[] | number {  //kiírja az indexelt kocka eredményét, ha nem írok indexet akkor mind a 6 kocka eredményét kiírja
      if (index === undefined) {
        for (let i = 0; i < this.numOfDices; i++) {
          return this.dice;
        }
      } else {
        return this.dice[index];
      }
    }
  }
  let diceSet = new DiceSet(); //csináltam egy "dobást" aminek a neve diceSet
  diceSet.roll(); //dobok egyet, de nem írom ki console.loggal
  for (let i = 0; i < diceSet.numOfDices; i++){ //ismételjen addig amig el nem éri a kreált diceSet numOfDices számát, amit 6, mivel az elején 6 a numOfDices (6kockánk van) ezért 6x dobunk VAGY VÉGIG MEGYEK AZ ÖSSZES KOCKÁN AMI JELENLEG NUMOFDICES VAGYIS 6
    while (diceSet.getCurrent(i) != 6){ //  while = amíg nem egyenlő 6al, addig csináljon valamit, vagyis reroll
      diceSet.reroll(i);
    }
  }
console.log(diceSet); //ez kiírja az egész instance = példányát
console.log(diceSet.getCurrent()); //ez csak a dobás eredményét írja ki
  
  // You have a `DiceSet` class which has a list for 6 dice
  // You can roll all of them with roll()
  // Check the current rolled numbers with getCurrent()
  // You can reroll with reroll()
  // Your task is to roll the dice until all of the dice are 6
  
  // let diceSet = new DiceSet();
  // console.log(diceSet.roll());
  // console.log(diceSet.getCurrent());
  
  // console.log("------------------");
  
  // diceSet.reroll();
  // console.log(diceSet.getCurrent());
  
  // console.log("------------------");
  
  // console.log(diceSet.getCurrent(5));
  // diceSet.reroll();
  // console.log(diceSet.getCurrent());
  
  // console.log("------------------");
  
  // diceSet.reroll(4);
  // console.log(diceSet.getCurrent());