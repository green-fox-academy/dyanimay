import { Pokemon } from './Pokemon'

let pokemonOfAsh: Pokemon[] = initializePokemon();

// Every pokemon has a name and a type.
// Certain types are effective against others, e.g. water is effective against fire.

// Ash has a few pokemon.
// A wild pokemon appeared!

let wildPokemon: Pokemon = new Pokemon('Oddish', 'leaf', 'water');

// Which pokemon should Ash use?

//console.log('I choose you, ');

function initializePokemon(): Pokemon[] {
    return [
        new Pokemon('Balbasaur', 'leaf', 'water'),
        new Pokemon('Pikatchu', 'electric', 'water'),
        new Pokemon('Charizard', 'fire', 'leaf'),
        new Pokemon('Balbasaur', 'water', 'fire'),
        new Pokemon('Kingler', 'water', 'fire')
    ];
}
let chosenOne:string;
for (let i = 0; i < pokemonOfAsh.length; i++){
    if (pokemonOfAsh[i].isEffectiveAgainst(wildPokemon)){
        chosenOne = pokemonOfAsh[i].name;
    }
}
console.log('I choose you, ' + chosenOne + '!');
// let chosenOne:string ;
// for (let i = 0; i < pokemonOfAsh.length; i++){
//     if (pokemonOfAsh [i].isEffectiveAgainst (pokemonOfAsh[2])){
//         chosenOne = pokemonOfAsh[i].name; //pokemonofAsh mindegyik tagjan vegig megy (i növekszik) és megnézi melyiknél IGAZ az iseffectiveagainst funckio ami egy boolean.
//         break;
//     }
// }
// console.log(chosenOne + '!');