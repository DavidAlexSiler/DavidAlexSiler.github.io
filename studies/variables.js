/*
variables.
variables are containers for assignable values such as numbers, strings, booleans,
          arrays, object, and other data types.
                          
variables have two parts -  0. declaration.
                            1. assignment.
variables have three different types - 
                            2. var - reassignable.
                            3. let - reassignable in their block.
                            4. const - cannot be reassigned.
variables are hoisted differently depending on their type - 
                            5. var - hoisted to the top of function scope, or global
                                    scope if they are outside of a function.
                            6. let - not hoisted to the top of the block of code 
                                    to which they are declared.
                            7. const - not hoisted to the top of the block of code 
                                    to which they are declared.
*/

//0. declaration//
    var fruit;
//variable is declared yet undefined when console.log'd

//1. assignment//
    fruit = 'apple';
    console.log(fruit);//-> prints apple.

//2. reassigment//
    fruit = 'candy';
    console.log(fruit);//-> prints candy

//3. this also works with let//

    let candy = 'gum';
    candy = 'tide pods';
    console.log(candy);//-> prints tide pods

//4. this DOESNT work with const
    const bedTime = 9;
    //bedTime = 12; -> this will not work!
    console.log(bedTime);//-> throws error 'assignment to constant variable'

//5. hoisting//
    ham = 'so so good';
    console.log(ham);
    var ham;

// because of hoisting, the above is the same as below..

    var ham;
    ham = 'so so good';
    console.log(ham);