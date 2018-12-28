/*
loops.
loops are used to iterate through code multiple times.

loops come in three different varietes:
                            0. while loops.
                            1. for loops.
                            3. for-in loops.
                            
loops need stopping conditions or they will run infinitly and **F. your A.S.S.!**
F-reeze your A-ssignment, S-creen, or S-ession.  (among other things.)
*/


//0. while loops.//

/*
 while loops only take one conditional.
*/
    var burgers = 0;
    while (burgers < 10) {
// as long as the burger < 10 returns true it will repeat the block of code.
// this saves from the burgers from going to infinity (as cool as you'd think).
    burgers++;
// this while loop will iterate 10 times
    }console.log(burgers);//-> prints 10
// did you want to order anything for yourself?


//1. for loops//

/* 
for loops (1) initialize a starting point; (2) a stop condition; (3) then an incrementor.

for loops are handy for iterating through arrays, because arrays are zero indexed.

for loops can also iterate backwards with a little tinkering.
*/
    var jennysNumber = [8, 6, 7, 5, 3, 'Oh', 9, 'e-i-ne-ein-in'];
    for(var i = 0; i < jennysNumber.length; i++){
//         (1)   ;(2)                     ;(3)
        console.log(jennysNumber[i]);//-> sing it.
    }

    var backwards = ['r', 'a', 'c', 'e', 'c', 'a', 'r'];
    for (var i = backwards.length -1; i >= 0; i--){
        console.log(backwards[i]);//-> prints racecar backwards... i think.
    }
    
//2. for-in loops//

/*
for-in loops are used to iterate through objects who use key value pairs.
*/

    var funWeekends = {name: 'Bernie', age: 65, alive: "'true'"};
    for (var key in funWeekends) {
    console.log(key); // prints the key per iteration (name, age, alive)
    console.log(funWeekends[key]);// prints the value of the key per iteration
                                   // (name: Bernie, age: 65, alive: 'true')
    }/* no one will ever be able to tell and we can get his 
        social security or whatever the plot of that movie was.*/