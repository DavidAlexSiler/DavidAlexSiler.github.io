//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    var newArr = [];
    for(var values in object){
        newArr.push(object[values]);
    }return newArr;
}  

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
   return Object.keys(object).join(' ');
}
//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
   // debugger;
    let newArr = [];
   for(var key in object){
       if(typeof(object[key]) === 'string'){
           newArr.push(object[key]);
       }
           
   }return newArr.join(' ');
}
//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if(Array.isArray(collection)){
       return 'array';
   }else{
       return 'object';
   }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
   return string[0].toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    var splitStr = string.toLowerCase().split(' ');
    for(let i = 0; i < splitStr.length; i++){
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substr(1);
    }
    return splitStr.join(' ');
    
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    return `Welcome ${object['name'][0].toUpperCase()}${object['name'].slice(1)}!`;
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    return `${object['name'][0].toUpperCase()}${object['name'].slice(1)} is a ${object['species'][0].toUpperCase()}${object['species'].slice(1)}`;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    if(object.hasOwnProperty('noises') === false){
      return 'there are no noises';
  }else if(object['noises'].length === 0){
      return 'there are no noises';
  }else if(object['noises'].length > 0){
      return object['noises'].join(' ') ;
    }

}


//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
 if(string.includes(word)){
     return true;
   }else{
     return false;
   }

}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    // console.log(name, object);
    // if 
    if(!name){
    return object;
    }else if(name.length > 0){
        object['friends'].push(name);
    }
    
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
   
     
    if(object.hasOwnProperty('friends') === false){
        return false;
    }else if(object.friends.length > 0){
        for(let i = 0; i < object['friends'].length; i++){
            if(object['friends'][i] === name){
                return true;
                }
            }
        }return false;
    }


//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
// var nameList = [];
// var nonFriends = [];
// for(var i = 0; i < array.length; i++){
//     nameList.push(array[i].name);
// }
// for(var j = 0; j < array.length; j++){
//     if(array[j].name === name){
//         //array j is 
//         for(var k = 0; k < nameList.length; k++){
//             if(nameList[k] !== name && !array[j].friends.includes(nameList[k])){
//                 nonFriends.push(nameList[k]);
//             }
//         }
//     }
// }   
//     return nonFriends;

// }


var names =[];
  var friends = [];
  var nonfriends = [];
  for(var i = 0; i < array.length; i++){
      names.push(array[i].name);
      if (array[i].friends.includes(name)){
       friends.unshift(names[i]); 
      }
     else if(!friends.includes(names[i]) && names[i] !== name){
       nonfriends.push(names[i]);  
     } 
  }
  return nonfriends;
} 

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
//Should take an object, a key and a value. Should update the property <key>
//on <object> with new <value>. If <key> does not exist on <object> create it.
//console.log(object, key, value);
    object[key] = value;
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
//console.log(object, '\n', array);
//Should take an object and an array of strings. Should remove any properties on <object> that are listed in <array>
for(let i = 0; i < array.length; i++){
   if(array[i] in object){
        delete object[array[i]];
    }

}
}



//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
   debugger;
   for (var i = 0; i < array.length; i++){
        for (var j = i+1; j < array.length; j++){
            if (array[i] === array[j]){
                array.splice(j,1);
                i--;
            }
        }
    }
return array;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}