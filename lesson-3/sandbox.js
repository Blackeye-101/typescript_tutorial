// explicit types
var character;
var age;
var isLoggedIn;
age = 30;
isLoggedIn = true;
// isLoggedIn="Ravi"
//arrays
var ninjas;
ninjas = ["Rishabh", "Thakur"];
// ninjas=[10,20]
var arr = []; // initialising the array as an empty array
arr.push(10);
//mixed type array
//union type
var mixed = [];
mixed.push("hello");
mixed.push(20);
// mixed.push(false)
console.log(mixed);
var uid; // can also make a mixed type variable
uid = 123;
console.log(uid);
uid = '123';
console.log(uid);
//objects
var obj;
obj = { name: 'Rishabh', age: 30 };
var obj2;
//dynamic(any) type
// but it strips typescript of any benefit it has whatsoever, just like reverting to js
var num = 25;
num = "rishabh";
console.log(num);
var mixedArray = [];
mixedArray.push("rishabh");
mixedArray.push(20);
mixedArray.push(true);
console.log(mixedArray);
var mixedObject;
mixedObject = {
    name: 80085,
    age: true
};
console.log(mixedObject);
