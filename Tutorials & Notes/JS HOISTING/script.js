function sumFunc(a,b){

    return a+b

}// Can use this anywhere

const sumFunc = (a,b) => a+b //cannot use/call this before initialization  i.e. arrow function and const is used or even let

console.log(`sumFunc(1,2)=> ${sumFunc(1,2)}`);

console.log(`sumFunc(1,2)=> ${sumFunc(3,4)}`);



