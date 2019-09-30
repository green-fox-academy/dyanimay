import { Flower } from './flower';
import { Tree } from './tree';

export class Garden {
    protected _flower: Flower[]; //is able to hold unlimited amount of flowers
    protected _tree: Tree[]; //is able to hold unlimited amount of trees

    constructor (){ //the () is empty because when we create a new Garden, we don't want to instantly add flower and tree. that can be an empty garden
        this._flower = []; //same as Cohort exercise, the new garden can be empty so this._flower and this._tree can be empty array
        this._tree = [];
    }

    addFlower (flowerToAdd: Flower){
        this._flower.push(flowerToAdd);
    }

    addTree (treeToAdd: Tree){
        this._tree.push(treeToAdd);
    }

    gardenWatering (waterAmount: number){ //waterAmount is 40 and 70 in the exam case
        let needWater = 0;

        for (let i:number = 0; i < this._tree.length; i++){ //we iterate through the number of trees are in the garden
            if (this._tree[i]._waterLevel < 10){ //we check every single tree (i), whether they need water (below 5) or not
                needWater++; //if the condition is true, so they need water, then add +1 to needWater (the number of trees which need water)
                console.log('The ' + this._tree[i]._color + ' tree needs water.');
            } else {
                console.log('The ' + this._tree[i]._color + ' tree doesn\'t need water.');
            }
        }

        for (let j:number = 0; j < this._flower.length; j++){
            if (this._flower[j]._waterLevel < 5){
                needWater++;
                console.log('The ' + this._flower[j]._color + ' flower needs water.');
            } else {
                console.log('The ' + this._flower[j]._color + ' flower doesn\'t need water.');
            }
        }

        console.log('\nWatering with ' + waterAmount);
        for (let k:number = 0; k < this._tree.length; k++){
            if (this._tree[k]._waterLevel < 10){
                this._tree[k]._waterLevel += waterAmount / needWater * 0.4;
            }
        }

        for (let l:number = 0; l < this._flower.length; l++){
            if (this._flower[l]._waterLevel < 5){
                this._flower[l]._waterLevel += waterAmount / needWater * 0.75;
            }
        }
    }
}