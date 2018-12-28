/*
datatypes.
datatypes are the different types of data in javascript.

datatypes come in 2 flavors: 0. simple (primitive):
                                    0. number - numeric data
                                    1. string - character data
                                    2. boolean - true/false
                                    3. undefined - no value (un-initialized)
                                    4. null - no value (nullified by programmer)
                                    5. NaN - Not a Number
                             1. complex :
                                    6. array
                                    7. object
                                    8. function
*/

//0. simple data types//

/*
    simple (primitive) data types are atomic, or immutable. 
    they do not hold or collect any values.
    operations on these types do not alter the original values,
    they just return NEW simple values.
    
    they are also -copied by value- which is when assignment or
    passing of new data types are copied from one variable to the next.
*/

    var numBa = 9;// datus-numericus
    var string = 'bean';// datus-stringus
    var orDare = true;// datus-booleanus
    var whaaaaat;// datus-undefineus
    var cardi = null;// datus-birdus-nullum
    var grandMa = NaN;// datus not-a-numberus-but-a-septugenariumus

//copy by value//
    var animal = 'walrus';// animal is a walrus
    var anotherAnimal = animal;// look another walrus
    animal = 'hamster'; // nvm it was a hamster, but anotherAnimal is still a walrus
    console.log(anotherAnimal);//-> prints 'walrus' because it was passed by value.


//1. complex data types//

/*
    complex data types can collect (agregate) other values, so the can grow
    like really really big (really).

    when assigning or passing complex data types, they are passed by reference.
*/

//array//
    var aR = ['i', 'a', 'n', 'a',' ', 'g', 'r', 'a', 'n', 'd', 'e'];
/*
    arrays: a. can hold any number of different values.
            b. are 0-indexed, meaning the 1st position is zero
                and it only goes up from there baby!
            c. accessable through [bracket] notation.
            d. surrounded by [brackets].
*/
    console.log(aR[5]);//-> prints g cause THATS WHAT I TOLD IT TO DO.
    
//object//
    var mc2 = {e:'n', e:'r', g:'y'};
/*
    objects: a. can hold any number of different data values.
             b. are stored in key-value pairs.
             c. can be accessed by bracket AND dot notation.
             d. surrounded by {birdies}.
*/
    console.log(mc2.g);//-> prints y (value to that key)
    console.log(mc2['g']);//-> prints y (ditto)

//function//
    function add(a, b){//this function will add these parameters 
        return a + b;//-> (body) says whatever parameters is gonna be doing (wait for it)
    }add(1, 2);//(call)s function and replace parameters with arguments and does what 
                    //the body wants. isnt that easier than just doing it in your head?
/*
    functions: a. are blocks of code that can be reused.
               b. are called by typing name of function followed by ().
               c. have parameters.
               d. can take any number of arguments
               e. can have a return, its what gives the function value. awww :')
*/
    console.log(add(2, 3));//-> s'gonna print 5!
    
//copy by reference//
    var fonzie = {says: 'ayyyy!'};
    var pirate = fonzie;
    pirate.says = 'arrrr!';
    console.log(fonzie.says); // -> prints 'arrr!' because both fonzie and pirate 
                            //   reference the same location, and now fonzies a 
                          //   freakin pirate.

//2. infinity//

/*
    infinity is bigger than all other numbers
    -infinity is smaller than all other numbers
    mathematically this number behaves.... like infinity.
*/

    console.log(5 / Infinity); //-> prints 0, anything divided by infinity is 0
    console.log(-Infinity + 12); //-> prints -Infinity, -Infinity + anything is -Infinity