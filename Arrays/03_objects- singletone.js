//SingleTone objects
// if we declare the object by using the new Object() key word 
// then that object is called singleTone Object
// if we decalred the objects with the help of constructor the it as singletone obj. 

// const name=new Object()
// console.log(name);


const obj={
    name:"ANKITA",
    age:20
}
console.log(obj.name);

// merge two objects into single object

const obj1={ 1:"a",2:"b",3:"c"};
const obj2={4:"z",5:"n",9:"x"};

// spread operation
const obj3={...obj1,
    ...obj2};
console.log(obj3);

console.log(Object.keys(obj1)); //output value data type in the form of Array
console.log(Object.values(obj1));// output value data type in the form of Array
console.log(obj1.hasOwnproperty("a"));// output in the form of boolean
