// 1.how to compare two json have the same properties without same order 

let obj1={name:"person 1",age:"5"};
let obj2={age:"5",name:"person 1"};
console.log(JSON.stringify(obj1)===JSON.stringify(obj2))
//false

// same properties same order
let obj3={name:"person 1",age:"5"};
let obj4={name:"person 1",age:"5"};
console.log(JSON.stringify(obj3)===JSON.stringify(obj4))
//false
