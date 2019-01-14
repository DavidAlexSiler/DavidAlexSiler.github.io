// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lodown-davidalexsiler');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 */

var maleCount = function(array) {
    var counter = 0;
    _.each(customers, function(e, i, a){
        if(a[i]['gender'] === 'male'){
            counter++;
        }
    });
    return counter;
};

var femaleCount = function(array){
    
    let counter = 0;
    _.each(customers, function(e, i, a){
        if(a[i]['gender'] === 'female'){
            counter++;
        }
    });
    return counter;
};
var oldestCustomer = function(customers){
    //need to compare one customer's age to another to see whom is the oldest
//the return value is a string, the name of the oldest customer.
//declare and initialze two variables, one to test which customer has the 
// hightestAge, and the other to contain the customer object
let highestAge = 0;
let oldest; 
//run an .each loop
_.each(customers, function(customer, index, customers){
    //if the customer's age property is higher than the prev variable hA, 
    if(customer.age > highestAge){
        //reassign highestAge to that object.age
        highestAge = customer.age;
        //reassign the oldest variable to the customer object.
        oldest = customer;
    } 
});
//if this an object, I should be able to access the name property of the 
//object using .notation. 
return oldest.name; 
};

var youngestCustomer = function(array){
let lowestAge = 1000000;
let youngest; 
//run an .each loop
_.each(customers, function(customer, index, customers){
    //if the customer's age property is higher than the prev variable hA, 
    if(customer.age < lowestAge){
        //reassign highestAge to that object.age
        lowestAge = customer.age;
        //reassign the oldest variable to the customer object.
        youngest = customer;
    } 
});
//if this an object, I should be able to access the name property of the 
//object using .notation. 
return youngest.name; 
};

var averageBalance = function(array){
  var sumOfBalances = 0;
_.each(customers, function(e, i , a){
    sumOfBalances += parseFloat(a[i]['balance'].replace(/\$|,/g, ''));
});
return sumOfBalances/array.length;
};

var firstLetterCount = function(array, letter){
    //console.log("Array: ", array)
 var result =_.reduce(array, function(acc, curr){
     var firstLet = curr.name[0].toLowerCase();
     //console.log("First Letter: ", firstLet.toLowerCase())
     //console.log("Letter to lowercase: ", letter.toLowerCase())
     if(firstLet === letter.toLowerCase()){
         return acc + 1;
     }
     return acc;
 }, 0);
 return result;
};
var friendFirstLetterCount = function(array, name, letter){
  var customerArray =  _.filter(array, function(customer){
      if(customer['name'].toLowerCase() === name.toLowerCase()){
          return true;
      }
      return false;
  });
  var friends = customerArray[0].friends;
  return firstLetterCount(friends, letter);
};

var friendsCount = function(array, name){
    var friendCo = _.filter(array, function(customer){
       var friends =  _.map(customer.friends, function(e){
           return e.name;
       });
        if(friends.includes(name)){
            return true;
        }
        return false;
    });
    return _.map(friendCo, function(e){
        return e.name;
    });
};

var topThreeTags = function(array){
    var tagCount = {};
    _.each(array, function(customer, i, a){
        _.each(customer.tags, function(tag, i, a){
            if(!tagCount[tag]){
            tagCount[tag] = 0;
            }
            tagCount[tag] += 1;
        });
    });
    var resultArr = [];
    _.each(tagCount, function(value, key, a){
        resultArr.push({tag: key, count: value});
   });
    var compare = function(a,b) {
  if (a.count < b.count)
    return -1;
  if (a.count > b.count)
    return 1;
  return 0;
};
var sortedArr = resultArr.sort(compare);
var topThree = _.map(sortedArr, function(e){
    return e.tag;
});
return topThree.slice(-3);
};

var genderCount = function(array){
    var reducePeople = _.reduce(array, function(acc, curr){
        var gendR = curr.gender;
        acc[gendR] += 1;
        return acc;
    }, {male: 0, female: 0, transgender: 0});
   return reducePeople;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
