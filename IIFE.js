// IIFE 👍
// Immediately invoked function expression
// It is a javascript function that runs or executes as soon as it is defined.
// It is a design pattern which is also known as self - executing anonymous function


// syntax : with normal function
// (function (){
//...block of code
// }) ();

// syntax with: arrow function :
// (()=>{
//     ...block of code
// })();

// IIFE function contain two major part
// 1.The first is the anonymous function with lexical scope enclosed within the Grouping Operator()
// This prevent accessing variable within the iife idiom as well as polluting the global scope
// 2.The second part create the immediately invoked function expression() 
//  through which the javascript engine will directly interpret the function

// Why do we use the immediately invoked function ?
// 1.When you defined a function the javascript engine add the function to the global objects
// 2.Also likewise you defined variable outside the function using var keyword 
// the javascript engine also add the variable to the global object 

// exampel :
function add (a,b){
    return a+b
}
console.log(window.add)
// in above example javascript engin add the add() function window global object

var counter =10;
console.log(wondow.counter);
//1. also defient more variable outside the function so also javascript engine add 
//those varibel to the global object 

//-  If you have many global variables and function the javascript engine will
//  only release the memory allocation for them until the global object loose their scope
// - As result the script may use the memory efficiently on the top of that having global 
// variable and function will likely cause name collision
// - So one way to prevent the function and variable from polluting to the namespace so used iife
//-  Because our application could include many functions and global variables from different source file
// - It important to limit the number of global variables 
// - If we have some initiation code we don't need to used again we could used the iife pattern
//-  As well will not return code again, so using iife in this case is better then using function
// eclaration or function expression
// Note 👍
// - Iife basically used to avoiding polluting the global namespac

// exampel:
let sum =(function(a,b){
    return a+b
}) (10,20);
console.log(sum) // it hold the result of function call
// - in above example part of the right side of the assignment operator is function expression because
// function is an expression you can wrap it inside teh parantheses
// - sum varible reffered to as an anonymous function that add two argument and execute iife after creating it
// so above expresion is iife because function is created as an expression and executed immidiately.


//  an iife can have name it can not invoked again after execution
(function namedIIFe(){
//block of code
}) ();


// /Iife starting with ; semicolon
// Some time you may see iife start with semicolon
// So a semicolon is used to terminate the statement in case two or more javascript files
//  are blindly connected into a single file.

;(function(){
    // 
}) () ;