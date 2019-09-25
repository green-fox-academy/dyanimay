let tree1 = {
    leafColor: 'green',
    type: 'Oak',
    age: 15
}
let tree2 = {
    leafColor: 'brown',
    type: 'Christmas',
    age: 1
}

let trees: any [] = [tree1, tree2]
let youngTrees = trees.map(function(element){
    if (element.age > 10){
        return Element;
    }
}).filter(function(element){
    return element;
})

console.log(youngTrees);