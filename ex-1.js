// Exercise #1: Strict and Same
// Start commenting here
Object.is(10, 20); //fale
Object.is(0, -0); //fale
Object.is(NaN, 100); //fale
Object.is("one", "two"); //fale
Object.is({ name: "John", age: 30 }, { name: "John", age: 30 }); //fale
Object.is(null, undefined); //fale

10 === 20; //fale
10 === "10"; //fale
3.14 !== 3.14;
"TechUp" !== "TechUp"; //fale
NaN === NaN; //fale
0 !== -0; //fale

let objectA = { course: "Web Developer", price: 300000 };
let objectB = { course: "Web Developer", price: 300000 };
objectA === objectB; //fale
