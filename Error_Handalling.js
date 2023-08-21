// // Error Handalling 

// Javascript Error Handling 👍
// Error Handling
// In javascript for error handling purpose we have to used the try catch block 
// Try…catch statement is comprised of a try block and either a catch block a financially black or both 
// In the try block code executes first and if it throws an exception then 
//  code in the catch block will be executed.
// The code in the finally block will always be executed before control flow exits the entire construct.

//prupose of error handalling
// example
let result = add(10,20);
console.log('result',result);
console.log('bye');
//-  In the above example attempts to the call add() function do not exist
// - So this error state that the add is not function and error type is referenceError
//  When javascript encounters an error it issues or shows that error and immediately terminates the execution of the entire script so above code terminates the first line.
//-  But sometime you need to handle the error and continue the execution so that time you used try-catch block

// syntax :
try{
    trystatement // statment to be executed
}catch(exceptionvar){  //execptionvar is optional identifier or pattern 
        // to hold the caught exception is thrown in the try block
    catchStatment // statment that executed if an expression is throw in the try block
}finally{
    finallyStatement // finally statment executed before control flow exits the try_catch_finally
    // construct 
    // this finally statment execute regardless of whether an exception was thrown or caugh
}

// The try statement alway starts with a try block then a catch block or a finally block must be present.
// It also possible to have both catch and finally blocks
// This give three forms
// Try….catch
// Try…finally
// Try…catch…finally

// Explanation 
// In try block place the code that may cause an error
// In catch block implement the logic to handle the error
// A catch block contain the statement that specify what to do if an exception is thrown in the try block
// If any statement within the try block throws an exception so control 
// immediately shifts to the catch block if no exception is thrown in the try block  so the catch block is skipped.
// So also javascript engine provide you with an error objects that contain detail information about error
// So basically error object contain tow properties
// Name: specify the name
// Message:explore the error in details 
// Web browser may add more properties to the error object ex firefox add fileName, 
// lineNumber and stack properties to the error objects
// So it is good practices to place only the code that may cause on exception in the try block
// The finally block always executed before control flow exits the try..catch..finallyconstruct
// It always execute, regardless of whether an exception was thrown or caught


// catch Binding :
// exampel
try{
    let result = add(a,b)
    console.log(result)
}catch(e){
    console.log({name:e.name, messatge:e.message})
}

//- So in the above example call the add() function and assign the return value in the result variable and the add function does not exist so the javascript engine skip the statement that outputs the result in the console
// And immediately execute the statement in the catch block that the output an error name and error message
// -So here we already handled the error the javascript engine continues to last statement execution 
//- So the exception binding is writable.For example you may want to normalize the exception value to make sure it's an error object. 

try{
    throw "oops this is not erro objects"
}catch(e){
    if(!(e instanceof Error)){
        e = new Error(e)
    }
    console.log(e.message);
}

// if you dont need the exception value you can omit it along with the enclosing parentheses
function isValidJson(text){
    try{
        JSON.parse(text);
        return true
    }catch{ // here you omit it along with enclosing parentheses 
        return false
    }
}

// ignore the catch block :
const add = ()=>{
    return x+y
}
try{
    let result = add(20,30) // here ignore the catch block becaue the try block does not 
    // throw execption
    console.log(result)
}catch(e) {
    console.log({name:e.name, message: e.message})
}
console.log('good bye..')

// In above example isvalid json accepts the string it return true if that string is valid json or false otherwise
// Here we have to used json parse() method and try catch
// Json parse method parse a json string and return an object is the input string is not json string it thrown an exception
// If not exception occurs the function return true if the try block otherwise false in catch block

// Finally block 👍
// So try catch, and finally statement is used to catch exception and execute block weather exception occur or not 
// So try catch block use to catch the exception and handle the gracefully and sometime you want to execute block of code weather exception occurs or not in this case you have to used try catch and finally block
// So finally block always executed after the try and catch block completes and weather exception occur or not 
// The finally block contains statement to execute after the try block and catch blocks execute but before the statement following the try, catch, finally block
// Which can proceed in one of the following way
// Immediate before the try block finishes execution normal 
// Immediate before catch block finishes execution normally 
// Immediately before the control flow statement( return, throw, break, continue) is excited in the try block of catch block
// So  exception throw from the try block even when there no catch block to handle the exception the finally block still execute in which case the exception is still thrown immediately after the finally block finishes execution
// Example
openFile();
try{
    // tie up a resource
    wreitMyfile(theData);
}finally{
    closeMyfile() // alway close the resource
}


// exampel try catch and finally block
let reuslt =0;
try{
    result = add (10,20); // hrre occure an excepton
}catch(e){
    console.log({message: e.message}) // here show add function not defined 
}finally{
    console.log('the value of the reult ', result)  
    // so finally block alway execute if excepton occure or not 
}


// example :
function doit(){
    try{
        return 1
    }finally {
        return 2
    }
}
doit() //return 2


// condition catch block
try{
    myroutine() // it may be thrwo multiple error so you have to handled 
}catch(e){
    if(e instanceof TypeError){
        // statemet handaled by type error exception
    }else if(e instanceof RangeError){
        //statmet handalled range exception
    } else if(e instanceof EvalError){
        // statement handalled eval excepton
    }else{
        // statment handalled to any unspecified exception
        logMyErrors(e) // pass exception object to error handaler
    }
}


// nested try block :

try{
    try{
        throw new Error("opps")
    }finally{
        console.log("finally")
    }
}catch(ex){
    console.error("outer", ex.messatge)
}
// output
//finally
//outer, oops;

// if we laready caught the exception in the inner try block by adding catch block
try{
    try{
        throw new Error("oops")
    }catch(ex){
        console.error('inner',ex.message)
    }finally{
        console.log('finaly')
    }
}catch(ex){
    console.error("outer", ex.message)
}

//inner,oops, finally
try {
    try {
        throw new Error("oops")
    } catch (ex) {
        console.error('inner', ex.message)
        throw ex;
    } finally {
        console.log('finaly')
    }
} catch (ex) {
    console.error("outer", ex.message)
}
// "inner" "loop"
// 'finally"
// "outer" "oops"