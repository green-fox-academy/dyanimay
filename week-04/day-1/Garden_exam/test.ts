import { Tree } from "./tree";
import { Flower } from "./flower";
import { Garden } from "./garden";

let flower1 = new Flower ('green', 1);
let flower2 = new Flower ('blue', 2);

let tree1 = new Tree ('big', 1);
let tree2 = new Tree ('small', 0);

let myLittleGarden = new Garden;
myLittleGarden.addFlower(flower1);
myLittleGarden.addFlower(flower2);
myLittleGarden.addTree(tree1);
myLittleGarden.addTree(tree2);

myLittleGarden.gardenWatering(40);
myLittleGarden.gardenWatering(70);