
/*
string manipulation.
strings can be manipulated with string methods and operators.

string methodes include:
0. .slice(start, end) 
        - returns a chunk of a string from the start index to the end index
1. .toUpperCase() 
        - converts the string to upper case and then returns it as a new string
2. .toLowerCase() 
        - converts the string to lower case and then returns it as a new string
3. .replace(replaceMe, replaceWith) 
        - replaces the first instance of replaceMe with replaceWith
4. .split(divider) 
        - takes a string and divides it into multiple substrings everytime it 
          reaches the divider (returns as an array of strings)
          
string methods are numerous and you arent expected to remember them all..
        these are just a few and they can always be googled.
*/


    var myString = 'Hamburger Hotdog';
    
    console.log(myString.slice(7)); 
// -> prints 'er Hotdog' (if no end argument, it goes to end of string)
    console.log(myString.toUpperCase()); 
// -> prints 'HAMBURGER HOTDOG'
    console.log(myString.toLowerCase()); 
// -> prints 'hamburger hotdog'
    console.log(myString.replace('Hamburger', 'Fully Loaded')); 
// -> prints 'Fully Loaded Hotdog'
    console.log(myString.split(' '));
// -> prints an array containing the strings ['Hamburger, Hotdog']

// strings can also be manipulated with operators//
    console.log("I'll have a " + myString + " add "+"Soda and Fries.");
//-> prints 'I'll have a Hamburger Hotdog add Soda and Fries.'
