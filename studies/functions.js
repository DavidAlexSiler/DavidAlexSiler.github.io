/*
functions.
functions are a type of data encapsulating reusable code.

functions have two exciting phases under their belts:
                   0. declaration/definition: where the function is created.
                   1. invocation/calling: using the function.
*/

//0. function declaration//
    function myFunction(paramOne, paramTwo) { 
// this is the function declaration of a named function saying that the function
// myFunction() takes two (optional) parameters.
        console.log(paramOne);
        console.log(paramTwo); 
// functions that take parameters SHOULD operate code based on the arguments passed
    }
         
//1. function invocation//        
    myFunction(2,3); 
// this function call passes the arguments 2,3 which  become paramOne and paramTwo.

/* 
    parameters - what we typically have operations relating to within the function.
        vs.
    arguments - whatever get passed to the function when called.
*/

// functions can also be assigned to variables 
    var print = function(paramOne, paramTwo) { // print replaces myFunction()
        console.log(paramOne);
        console.log(paramTwo);
    };
    print(2,3);
    
// functions can also output, or return, values.
    function add(a, b) {
        return a + b;
    }
    var addedNums = add(1,2); 
// addedNums is equal to 3 because the add function returns 3


// scope - what values are accessible, where.//

// Functions have access to their parent scope, but not the other way around.
    function addToAddedNums(c) {
        const x = 10;// const made inside
        console.log(c + x);
        console.log(c + addedNums); 
// can access addedNums, it was made in the parent scope (children can see parents).
    }
    addToAddedNums(15); // will log to console 25 and 18
    
// console.log(x);-> would produce a reference error, x can't be read
// by the parent scope since it was made in a child scope.


//closure - a function can carry references to variables in its parent scope.//

/* 
    functions form closures around the data they house.
    If that data is referenced elsewhere, the closures stay alive (able to be used).
*/
    function closure() {
        var num = 10;
        return function () {
            console.log(num); // num can be accessed, it was made in the parent scope
        };// this keeps num alive, but only able to be used by nest and its children

}
    var printTen = closure(); 
/* printTen is now equal to the 
     function() {
         console.log(num); 
         } num is equal to 10*/
    printTen(); // will log to console 10