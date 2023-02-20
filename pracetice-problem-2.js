// Practice Problem 2

// Write an arrow function where it will do the following:
// a) It will take an array where the array elements will be the
// name of your friends
// b) Check if the length of each element is even, push elements
// with even length to a new array and return the result



// const friends = ["alia", "mimmim", "annaduttl", "suniti", "plavvon"];


const evenarr = [];
const even = (...friends) =>{
    for(i=0; i<friends.length; i++){
        const friendValue = friends[i].length;
        if(friendValue % 2 == 0){
            evenarr.push(friends[i]);
        }
    }
    return evenarr;
}

const friendsName = ["alia", "mimmim", "annaduttl", "suniti", "plavvon"];
const  evenNumbers = even(...friendsName);
console.log(evenNumbers);
