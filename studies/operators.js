/*
operators.
operators are used to perform actions on or with values.

operators have many exciting flavors to choose from:
                                    0. assignment operators.
                                    1. arithmetic operators.
                                        * compound assignment operators.
                                    2. comparison operators.
                                    3. logical operators.
                                    4. unary operators
                                    5. ternary operators.
*/

//0. assignment operator  '='  assigns values//
    var ten = 10;
// assigns number value 10 to variable ten


//1. arithmatic operators perform math evaluations//
// the following statements all result in ten becoming equal to 10
    ten = 5 + 5; // The + operator adds values
    ten = 20 - 10; // The - operator subtracts values
    ten = 100 / 10; // the / operator divides values
    ten = 5 * 2; // the * operator multiplies values
    ten = 22 % 12; // the % operator divides the values and gives you the remainder

    
 
//* compound assignment operators combine an arithmatic and the assignment operator//
// The next two statements work the same
    ten += 10;
    ten = ten + 10;
// The next two statements work the same
    ten -= 10;
    ten = ten - 10;
// The next two statements work the same
    ten *= 10;
    ten = ten * 10;
// The next two statements work the same
    ten /= 10;
    ten = ten / 10;
// The next two statements work the same
    ten %= 10;
    ten = ten % 10;
    
 
//2. comparison operators evaluate to boolean values
    var myBoo = 1 > 0; // > greater than operator (myBoo evaluates to true)
    myBoo = 1 < 0; // < less than operator (myBoo evaluates to false)
    myBoo = 1 >= 1; // >= greater than or equal to operator (myBoo evaluates to true)
    myBoo = 1 <= 1; // <= less than or equal to operator (myBoo evaluates to true)
    myBoo = 1 == '1'; // == loosely equals operator (myBoo evaluates to true)
    myBoo = 1 === '1'; // === strictly equals to operator (myBoo evaluates to false)
    myBoo = 1 != '1'; // != loosely not equal to operator (myBoo evaluates to false)
    myBoo = 1 !== '1'; // !== strictly not equal to operator (myBoo evaluates to true)
    

//3. logical operators are typically used with boolean values. 
// when used with booleans will return booleans
myBoo = true && false; // && AND operator returns false if either value is false. 
                      //Otherwise will return true (myBoo is equal to false)
myBoo = true || false; // || OR operator returns false if both values are false.
                      //Otherwise will return true (myBoo is equal to true)
myBoo = !true; // ! NOT operator returns false if its operand can be converted to true.
              //(myBoo is equal to false)
              
              
//4. unary operators deal with 1 value
    !false; !0;//! is the logical NOT unary operator (returns true; 1)
//typeof is a unary operator that returns the value TYPE of its operand
    +'-3'; +true;//+ precedes the operand and tries to convert it to a number. 
                //(returns -3; 1).
    -3; -true;//- precedes the operand and tries to convert it into a number. 
             //(returns -3; -1)
    -'-3';//- performs an additional operation, negation/ (returns 3).
    ++ten;// returns the value of ten incremented by 1
    ten++;// returns the value of ten, THEN returns the value incremented by 1
    --ten;// returns the value of ten, decremented by 1
    ten--;// rethrns the value of ten, THEN returns the value decremented by 1
    
    
//5. ternary operators deal with 3 values they're often a shortcut for if-elseif-if's.

    var age = 12;
    //variable 'age' is set for 12
    var ronSwansonAdvice = (age <= 8) ? "Play all day!" : "GET A JOB";
    // variable ronSwansonAdvice is set to a ternary operations..
    // (condition) ? expression with any value1 : expressions with any value2;
    console.log(ronSwansonAdvice); // -> prints "GET A JOB"
    
// if this were an if statement//

    var ronSwansonAdviceIf = function(age){
        if(age >=9){
            return "GET A JOB";
        }else if(age <= 8){
            return "Play all day!";
        }
    };console.log(ronSwansonAdviceIf(12));