// object literals

// in objects the data are stored in the form of key and value pair
const users={
  name: "Ankita",
  LastName: "DP",
  age :21,
  rollnumber:3,
" full Nmae " :"Ankita Dp"
}
console.log(users.name);
console.log(users["name"]);
console.log(users["rollnumber"]);
console.log(users[" full Nmae "]); 

// take a symbol as key and use it in objeect key and print it

let sym=Symbol("nukey");
const obj={
    name:"Ankita",
    lastName:"DP",
    [sym]:"mysymbol"
}

console.log(obj[sym]);
console.log(typeof([sym]));
console.log(typeof(sym));

obj.name="changed name";
console.log(obj["name"]);
// Object.freeze(obj);
obj.name="anothe",
console.log(obj["name"]);
console.log(obj);

console.log("*************");
obj.greeting=function(){
    console.log("hello");
}
console.log(obj.greeting());


obj.greeting2=function(){
    console.log(`hello gm ${this.name}`);
}
console.log(obj.greeting2());
