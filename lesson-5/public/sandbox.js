"use strict";
let greet = () => {
    console.log("hello world");
};
// greet ="hello" // since the type is function
let foo;
foo = () => {
    console.log("hello again");
};
const add = (a, b, c, d = 10) => {
    // c is an optional parameter
    // d is a parameter with default value as 10
    // optional and default parameters must be put in the end (a good practice)
    console.log(a + b + d);
    console.log(c);
};
add(2, 3);
//either specify the return type explicitly or let typescript infer it automatically
const minus = (a, b) => {
    return a - b;
};
let result = minus(10, 7);
const logDetails = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
const greeting = (user) => {
    console.log(`${user.name} says hello`);
};
const greetAgain = (user) => {
    console.log(`${user.name} says hello`);
};
//function signature
//=================
// example-1
let foobar;
foobar = (name, greeting) => {
    console.log(`${greeting} ${name}`);
};
// example-2
let calc;
calc = (numOne, numTwo, action) => {
    if (action == 'add')
        return numOne + numTwo;
    else
        return numOne - numTwo;
};
//example-3
let logger;
logger = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} yrs old`);
};
