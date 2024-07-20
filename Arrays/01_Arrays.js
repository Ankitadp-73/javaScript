//Arrays : stores both homegenious and heterojenious data types objects

let arr=[10,20,40,40];
console.log(arr);


arr.push(90);// add the elements at the end.
console.log(arr);

arr.pop();
console.log(arr);// delete the last elements from the array

arr.unshift(100);
console.log(arr);// unshift add the elements at the first index

arr.shift();// remove the first elements from the index
console.log(arr);

console.log(arr.includes(20));


console.log(arr.indexOf(40));


let array=[1,3,4,6,7,8,9] ;
// in javaScript array there is nno concept of sunstring array

console.log(array.slice(1,3));// return the some part from the array and last index which is passes it doesnot includes
console.log(array); // in slice the original array doesnot changes
console.log(array.splice(1,3)); // includes the last index value also
console.log(array);// in splice the origina; array it changes

// ARRAY INSIDE ANOTHER ARRAY

const first=[1,2,3,4,5];
const second=[6,7,8,9];
first.push(second);
console.log(first);
console.log(first[5,1]);

let a=[1,2,3,4,5]
let b=[6,7,8,9]
let c=[...a,...b] // spread
console.log(c);

let one=[1,2,3,4,[2,4,5,6],4,6,[9,39,9]];
 const two=one.flat(Infinity);
 console.log(two);
 console.log(Array.from("ANKITA"));
 console.log(Array.isArray("ANKITA"));
 console.log(Array.from({name:"Ankita"}));

 let score1=100;
 let score2=200;
 let score3=300;
 console.log(Array.of(score1,score2,score3));
