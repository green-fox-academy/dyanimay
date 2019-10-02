export class Anagram {
  public anagram(a: string, b: string): boolean { //we call it method because this function is in a class (class becomes method)
      let y = a.split("").sort().join("");
      let z = b.split("").sort().join("");
    return (y === z);
  }
}