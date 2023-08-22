// throw keyword in javascript
// Throw statement used to throw on user defined exception
// Throw statement allow us to throw an exception
// If  the execution of the current function will  stop(the statement after throw wont be executed) 
// Or when encountering the throw statement the javascript engine stop the execution and control will be passed to the first catch block in the call stack 
// If know catch block exists among caller functions the program will terminate
// syntax
throw expression; // the expression to throw

//thrwo keyword can be followed by any kind of expression 
throw error; // throws a priviously defined value
throw new Error("required") // throw a new Error object

function getRectArea(width, hight){
    if(isNaN(width) || isNaN(hight)){
        throw new Error ('parameter is not a number')

    }
}
try{
    getRectArea(10,'b')
}catch(e){
    console.log(e)
    //Expected output : Error : parameter is not number
}

// example 2 :
// throwing a user defined error 
function isNumeric(x){
    return ["number","bigint"].includes(typeof x)
}

function sum(...values){
    if(!value.every(isNumeric)){
    throw new TypeError('can only add numbers');
}
return values.reduce((a,b)=>a +b)
}
console.log(sum(1,3,3)) // here print 6
try{
    sum("1","2")
}catch(e){
    console.error(e) 
    // typeError: can only add numbers
}

// throwing an existing object 
// in this example call a callback async fuinction and throw an error if the callback
// receives an error
readFile("foo.text",(err, data)=>{
    if(err){
        console.log(err);
    }
    console.log(data);
})


// - Error thrown this way are not catchable by the caller and will cause the program crash
//  unless(a) read file function itself catches the error or(b)  the program is running in a 
// context that catches top level errors
// - So you can handle errors more naturally by using the Promise() constructor

function readFilePromise(path){
    return new Promise((resolve, reject)=>{
        readFilePromise(path,(err,date)=>{
            if(err){
                reject (err)
            }
            resolve(data)
        });
    });
}
try{
    const data = await readFilePromise("foo.text");
    console.log(data)
}catch(err){
    console.lot(err)
}

// example 3
function add(x,y){
    if(typeof x !== number){
        throw 'the first argument must be number'
    }
    if(typeof y !==number){
        throw 'the second argument must be number'
    }
    return x+years;
}
const result = add(2,'b')
console.log(result);  // throw the first argument must be numberHere above example add function accept two arguments and return sum of the two numbers
// - So add function used the type of operator to check if the given argument 
// - is a number or not if not a number then throw the exception like user defined first argument must be number
// - If you call and pass string as argument is show the above error
// - So to handle this exception you have to used try-catch block
function add(x, y) {
    if (typeof x !== number) {
        throw 'the first argument must be number'
    }
    if (typeof y !== number) {
        throw 'the second argument must be number'
    }
    return x + years;
}try{
const result = add(2, 'b')
console.log(result);
}catch(e){
    console.log(e);
}

// Using javascript throw statement to throw an instances of the Error class
//     So below example we throw an instance of error class rather then a string in add() function
function add(x, y) {
    if (typeof x !== number) {
        throw new Error('the first argument must be number')
    }
    if (typeof y !== number) {
        throw new Error('the second argument must be number')
    }
    return x + years;
} try {
    const result = add(2, 'b')
    console.log(result);
} catch (e) {
    console.log(e.name, e.message);
}

// - Using javascript throw statement to the throw a user defined exception
// - Sometimes you want to throw custom error rather than built in error so to do 
// that you have to define the custom class that extends the error class and throw the new instances of that class.
class numberError extends Error{
    constructor(value){
        super(`${value} is not valid number`)
        this.number = 'invalidNumber'
    }
}
function add(x, y) {
    if (typeof x !== number) {
        throw new numberError(x)
    }
    if (typeof y !== number) {
        throw new numberError(y)
    }
    return x + years;
} 
try {
    const result = add(2, 'b')
    console.log(result);
} catch (e) {
    console.log(e.name, e.message);
}
//in the add function we thrwo an instance of the numberError class if the argument is not a valid number
//   so catch the exception by throw by add function
