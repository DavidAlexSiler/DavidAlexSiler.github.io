/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animal = {};
animal.species = 'dog';
animal['name'] = 'tom';
animal['noises'] = [];
//console.log(animal);
//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
noises[0] = 'bark';
noises.push('woof');
noises.unshift('howl');
noises[noises.length] = 'growl';
//console.log(noises.length);
//console.log(noises.length -1);
//console.log(noises);
//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal['noises'] = noises;
animal['noises'].push('arf');
//console.log(noises.length);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *brackets dots
 * 2. What are the different ways of accessing elements on arrays?
 *brackets
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animals = [];
animals.push(animal);
//console.log(animals);
var duck = {species: 'duck',
            name: 'Jerome',
            noises: ['quack', 'honk', 'squeeze', 'woosh']};
animals.push(duck);
//console.log(animals);
var cat = {species: 'cat',
            name: 'tony',
            noises: ['meow', 'purr']};
var skunk = {species: 'skunk',
            name: 'wally',  noises: ['scctth', 'coooo']};
animals.push(cat, skunk);
//console.log(animals);
//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var friends = [];
//you can easily access array elements (add, subtract, order, etc..)
function getRandom(collection){
    //find a random integer corresponding to the length of our animals array
    return Math.floor(Math.random() * animals.length);
    //using this number as an index get an animals name
    }
    friends.push(animals[getRandom(animals)].name);
skunk.friends = friends;

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
