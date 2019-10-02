export class CountLetter {
  public counter (string: string) { //we didn't set what it should create, we just set that it should take from a string
    let letterObject = {}; //I create the objectum which is empty for now
    string.split("").forEach(function(element){ //it will split my "string" at every "" nothing, at every character
      if (letterObject[element] === undefined){ //ha a letterObject object elementedik eleme egyenlő semmivel, vagyis nem szerepel az objectumban...
      letterObject[element] = 1; //... akkor rakjuk be az elementet az objectumba 1-es értékkel
      } else {
        letterObject[element] += 1; //ha már szerepel bármilyen értékkel, akkor adjunk hozzá még1et mivel még1x szerepel
      }
    }); 
    return letterObject;
  }
}
// let testingWord = new CountLetter;
// console.log(testingWord.counter('this is good')); THIS IS A CONSOLE.LOG TO SEE HOW IT LOOKS LIKE