const score=100;
console.log(score);

const balance=new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(typeof(balance));
console.log(balance.toFixed(3));
const otherNumber=123.455;
console.log(otherNumber.toPrecision(3));

const hundred=1000000;
console.log(hundred.toLocaleString());
console.log(hundred.toLocaleString('en-IN'));

//************MATHS*********** */
console.log("Math");
console.log(Math.random); // Always gives values between 0 and 1
console.log(Math.abs(4));
console.log(Math.abs(-4));
console.log(Math.round(3.45));
console.log(Math.ceil(5.8));
console.log(Math.floor(5.6));
console.log((Math.random()*10)+1);

const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1))+min);
