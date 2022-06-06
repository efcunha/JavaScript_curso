// function declaration

function sayHello(){
    console.log("Hello!");
}

sayHello()

function sayHelloTo(name){
    console.log("Hello " + name + "!");
}

sayHelloTo("John")

function sayHelloTo(name, age){
    console.log("Hello " + name + "! You are " + age + " years old.");
}

sayHelloTo("John", 30)

function returnHello(){
    return "Hello!";
}

returnHello()

let greeting = returnHello()
console.log(greeting)
console.log(returnHello())

function returnHelloTo(name){
    return "Hello " + name + "!";
}

console.log(returnHelloTo("John"))
