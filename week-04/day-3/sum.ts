export class List {
  public summa(array: number[]): number {
    return array.reduce(function(a,b){
      return a + b;
    }, 0);
  }
}
// let list1 = new List;
// console.log(list1.summa(myList)); //we need the test file instead of these 2 lines!!