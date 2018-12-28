/*
control flow.
control flow is made by using conditional statements which check to see
             if a given conditional is true- then performs a block of code.
    
conditional statements can be made with:
                                0. if-elseif-else 
                                1. switch statements.
*/


    var myFlow = 11;
    
//0. if-elseif-else statement//

// if statements check to see if the parenthesized part evaluates to true

    if (myFlow > 0) {
    console.log('Im a lyrical hero!');
    
// if else statements check the same way if's do, but is found after an if statement 

    } else if (myFlow === 0) { 
    console.log('I aint gettin no DeNero!');
    
// else statements only run its code if no if's or if-else's in the chain run their code

    } else { 
    console.log('Im gonna get an office job.');
    
    } // this if-elseif-else chain logs to console 'Im a lyrical hero!'
     // because the if conditional returned true and ran it's code and then
    // ignored the rest of the chain.
  // also cause momma didnt raise no CHUMP.
    
    
    
//1. switch statement//
    var crissCross = 1;

// switch statements set a single conditional.
    switch (crissCross) { 
// each case within the switch statement checks to see if the conditional returns true
    case 45:
    console.log('myConditional is equal to number 45'); // does not print
    case 1:
    console.log('myConditional is equal to number 1'); // does print
    case true:
    console.log('myConditional is equal to boolean true'); // does print
    // switch statements keep checking new cases until a break statement is hit
    break; 
}

//if-else if -else vs. switch//

/*
if and if else if else staments are very handy when you are just looking 
for one condition in specific.

switch statements are handy when you are looking for multiple conditions.
*/