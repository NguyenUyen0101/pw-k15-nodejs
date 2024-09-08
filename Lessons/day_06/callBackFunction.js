
function sayHello(name){
    console.log(`Hello ${name}`);
}
function sayHelloNewStyle( name, age){
    console.log(`How is going ${name}?`)
}

//callBackFunction

function functionCaller(name, callBackFunction){
    callBackFunction(name);
}

functionCaller("Teo", sayHello);
functionCaller("Teo", sayHelloNewStyle);
