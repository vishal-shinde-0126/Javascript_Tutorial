
// length property of an array instances represent the number of element in that array.
//it always grater then the highest index in the array
const clothing = ['shoes', 'shirts', 'socks', 'sweaters'];
console.log(clothing.length); //4

const listA = [1, 2, 3];
console.log('length of array a', listA.length); //3

const listB = new Array(6);
console.log('listOfb', listB.length);//6

// const newlength = listB.length = 2 ** 32;
// console.log('newlength', newlength); // it print invalid length

//Negative number not allowed 
// const listC = new Array(-100); // invalid array length
// console.log(listC);

// when length is set to bigger value then current length the array extended by adding the empty slot
//so empty slot have some intaraction with array methods.
const arr = [1, 2];
console.log(arr.length);

arr.length = 6;
console.log(arr.length);
console.log(arr);//[ 1, 2, <4 empty items> ]
console.log(arr.forEach((ele) => {
    console.log(ele)
    // console.log(index);
}));
//------------------------------------------------------

// 1. iterationg throw the array using length property.
const numbers = [1, 2, 3, 4, 5];
// Here we iterate the element using the length property
for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i] * 2;
}
console.log(numbers);
//--------------------------------------------------------------

//2. shortening an array 
const numbers1 = [1, 2, 3, 4, 5];
if (numbers1.length > 3) {
    numbers1.length = 3;
}
console.log(numbers1) // [1,2,3]
console.log(numbers1.length); // length is 3 
console.log(numbers1[3]); // undefined  -->  because the extra element are deleted  
//---------------------------------------------------------------------

//3 create array with fixed length
// const array = new Array();
const array = []
array.length = 5;
console.log(array); // [ <5 empty items> ]
console.log(array.length); // 5
//--------------------------------------------------------------

//4. array with non writable length
// length property is automatically updated by the array when elements are added beyond 
//the current length.If the length property is made non - writable, 
// the array will not be able to update it.This causes an error in strict mode.
// "use strict ";
// const numberss = [1, 2, 3, 4, 5];
// Object.defineProperties(numberss,'length', {writable:false});
// // numberss[5] = 6; // TypeError: Property description must be an object: l
// numberss.push(6);//TypeError: Property description must be an object: l
// can not assign to read only property length of objects.


//5. what is Prototype in javascript
//- Prototype is an object that associated with every function and object by default in javascript
//- so Every function includes the prototype object by default
//- function's prototype property is accessible and modifiable and object's prototype property (aka attribute) is not visible.
// - basically protopype allow for inhertances so that objects can inherits the properties and method from there parent object
// - so this is usefull for creating a hierarchy of objects where parent objects defind comman propeties and method
//- that are shared by all of its child objects
// - comes from the Latin words proto, meaning original, and typus, meaning form or mode
// -Date objects inherit from Date.prototype
//- Array objects inherit from Array.prototype
// - Person objects inherit from Person.prototype
// - The Object.prototype is on the top of the prototype inheritance chain:
// -Prototype is a special hidden property in JavaScript objects,
//- and each object can access its prototype through __proto__ .
//-  The prototype itself is an object, so it also has its own prototype.
// prototype allows you to add new properties and methods to arrays.
//- prototype is a property available with all JavaScript objects.
//----------------------------------------------------------------------------------------

// Array methods :
// 1. Array.prototype.at(index) :
//at() method take an integer value and return the item At that index.
//also positive and negative integer (negative integer count back from the last item in the array.)
const array1 = [5, 12, 8, 130, 44];
const findeItem = array1.at(3);
console.log(findeItem); // return 130 value at index 3
const findeItem1 = array1.at(-2);
console.log(findeItem1); // count back from element  return 130
console.log(array1);
const findeItem2 = array1.at(9);
console.log(findeItem2) // in at() method given index is not match its return undefined.

//2. return the last value of the array.
// follwing example provide a function that return the last element found in specified array
const cart = ["apple", "banana", "pear"];
function lastelement(arr) {
    return arr.at(-1);
}

const lastElement = lastelement(cart);
console.log(lastElement);
// add item into the cart array
const newItem = cart.push('orange');
// push method return the new length or the array
console.log('newItem', newItem);
console.log(cart);
const lastElement2 = lastelement(cart);
console.log(lastElement2);

// 3 comparing method :
const colors = ["red", "green", "blue"];
//using length property
// const last = colors.length-2; also you have defined 
const last = colors[colors.length - 2]
console.log(last);

// using slice method
const lastele = colors.slice(-2, -1);
console.log(lastele);

//using at() method

const lastEle1 = colors.at(-2);
console.log(lastEle1);

//calling at() method on not array object 
const obj = {
    length: 2,
    0: 'a',
    1: 'b',
    2: 'c'
};
console.log(Array.prototype.at.call(obj, 0)); //'a'
console.log(Array.prototype.at.call(obj, 2));// undefined.
//------------------------------------------------------------------------------------


//2. Array.prototype.concat(value, value1, value2..... ,valuen)
//concat method used to merge two or more array
//concat method does not modify the origional array
// concat method return new array.
//1. example
const array3 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const newarray = array3.concat(array2);
console.log(newarray);// return new array [ 'a', 'b', 'c', 'd', 'e', 'f' ]
//does not modify the origional array
console.log(array3, " + ", array3);

//2. example
// concatenating two array
const letters = ["a", "b", "c"];
const numbers4 = [1, 2, 3];
const alphanumeric = letters.concat(numbers4);
console.log('alphanumeric', alphanumeric);//alphanumeric [ 'a', 'b', 'c', 1, 2, 3 ]

//3. example 
//concatenationg three array
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];
const threeArray = num1.concat(num2, num3);
console.log(threeArray);//[1, 2, 3, 4, 5,6, 7, 8, 9]

//4.example
//concataneating value to an array
const letters1 = ["a", "b", "c"];
const newConcat = letters1.concat(1, [2, 3]); // return new array
console.log(newConcat);//[ 'a', 'b', 'c', 1, 2, 3

//5 example
//concatenating nesting array
const abc = [[1]];
const abc2 = [2, [3]];
const abcd = abc.concat(abc2); //[[1],2,[3]]
console.log(abcd); //return new array
//modifying the first element of the abcd
const newabcd = abc[0].push(4);
console.log('newarray', newabcd); //return new array length 2
console.log(abcd); //  [ [ 1, 4 ], 2, [ 3 ] ]
console.log(abc);//[[1,4]]

//example 6:
//concatenating on sparse arrays
const array123 = ['a', 'b', 'c', , 2]
const concatarray = array123.concat([4, 5, [6]]);
console.log(concatarray);
const concatarray1 = array123.concat(3, [, [5],]);
console.log(concatarray1);

//example 7:
//concatenating array-like object with symbol.isConcatSpreadable
//concat does not treate all array like objects as array by default only if
//Symbol.isConcatSpradable is set to truthy value is (true)
const obj1 = {
    0: '1',
    1: '2',
    2: '3',
    length: 3
};
const obj2 = {
    0: '1',
    1: '2',
    2: '3',
    length: 3,
    [Symbol.isConcatSpreadable]: true
};
console.log([0].concat(obj1, obj2));

// calling a concat on non-array objects.
// this value not in an array it is converted to an object and then treaded in same way as
// the arguments for concat(); 
const arrayLike = {
    [Symbol.isConcatSpreadable]: true,
    length: 2,
    0: 1,
    1: 2,
    2: 99, // ignored by concat() since length is 2
};
console.log(Array.prototype.concat.call(arrayLike, 3, 4));

//----------------------------------------------------------------------------------

// 3 Array.Prototype.copyWithin(target, start, end);
// the return value of the copywithin() method is modified array
//copyWithin() method shallow copies part of an array to another location of the same array
//and returns it without modifying its length.
const array1234 = ['a', 'b', 'c', 'd', 'e'];
//Here copy the third element to the 0th position
const newcopyarray = array1234.copyWithin(0, 3, 4) // ['d','b','c','d','e']
console.log(newcopyarray);
// copy the index 1 all elements from index 3 to the end 
console.log(newcopyarray.copyWithin(1, 3));// ['d','d','e','d','e']

//example 2 
// Here copy or move all the element to the right by 2 positon
console.log([1, 2, 3, 4, 5].copyWithin(2));
//copyWithin() method is mutating method it does not alter the length of this but it will
//change the content of  this and create new properties or delect existion property.

//example 3 
console.log([1, 2, 3, 4, 5].copyWithin(-2, -3, -1)); // [1, 2, 3, 3, 4]

//example 4 
//copywithin() will prapogate empty slots
console.log([1, , 3].copyWithin(2, 1, 2)); //[1,empty,empty]

//exmaple 4 
//calling copyWitin() on non-array object
const arrayLike2345 = {
    length: 5,
    3: 1,
};
console.log(Array.prototype.copyWithin(arrayLike2345, 0, 3)) //// Expected output: Array [0, "a"]
console.log(Array.prototype.copyWithin.call(arrayLike, 3, 1));// Expected output: Array [1, "b"]

//----------------------------------------------------------------------------------------

// 4. Array.prototype.entries() :   
//entries() method return new array iterator object that contain the key/value pair for each index in the array
//return a new iterable iterator  array (object)
//example 1:
const a = ["a", "b", "c"];
for (const [index, element] of a.entries()) {
    console.log('index: ', index); //0,1,2
    console.log('element: ', element); // a,b,c
}

// exmaple 2:
//using for..of loop 
const array0 = ["a", "b", "c"];
const arrayEntries = array0.entries();
for (const entrie of arrayEntries) {
    console.log(entrie);
} //[0,'1'] [1,'b'] [2,'c']


//example 3:
//iterating sparese arrays
for (const element of [, 'a'].entries()) {
    console.log(element);
} //[0, undefined] [1, 'a']

//example 4 :
// calling entries() method on non-array objects.
const arrayLike12 = {
    length: 3,
    0: "a",
    1: "b",
    2: "c",
    3: "d", // ignored by entries() since length is 3
};
for (const entry of Array.prototype.entries.call(arrayLike12,)) {
    console.log(entry); //[ 1, 'a' ] [0, 'a'] [1, 'b'] [2, 'c']
}

//-----------------------------------------------------------------------------------

//5. Array.prototype.every(callback_function, thisArg) :
//in callback function take three argument like element, index and array;
//so every() method test wheather all element in the array pass the test implemented by provided function.
//every() method return Boolean value. (if the callback function return truth value for every
// element its return true otherwise false)
//every method is iterative method, it call provided callback function each element of the array.

const isBelow = ((currentValue) => {
    return currentValue < 40;
})
const b = [1, 30, 39, 29, 10, 13];
const value = b.every(isBelow);
console.log(value);

//example 2
//example test weather all elements in the array are bigger then 10
function isBigEnough(element, index, arry) {
    return element >= 10;
}
console.log([12, 5, 8, 130, 44].every(isBigEnough)); //false
console.log([12, 54, 18, 130, 44].every(isBigEnough)) // true

//example 3 
//check one array is a subset of another array 
// following example check all the elements of an array are presne in another array
const isSubset = (array1, array2) =>
    array2.every((element) =>
        array1.includes(element));

console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])) //ture
console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])); //false

//example 4
//using every() on sparse array
//every() will not run its predicate on empty slots.
console.log([1, , 4].every((x) => x !== undefined)); // true
console.log([2, , 2].every((x) => x === 2))// true


//exampel 5 
//calling every on non-array object 
const ar = {
    length: 3,
    0: "a",
    1: "b",
    2: "c",
    3: 345, // ignored by every() since length is 3
};
console.log(Array.prototype.every.call(ar, (x) => typeof x === 'string'));
//----------------------------------------------------------------------------

// 6 Array.prototype.fill(value, start, end)
// The fill() method changes all element in an array to static value from start index (default 0)
//to and end index (default array.length)
// it return modified array. fill with value
const arr1 = [1, 2, 3, 4];
console.log(arr1.fill(0, 2, 4)); //[1,2,0,0]

//exmaple 2
console.log(arr1.fill(5, 1)); //[1,5,5,5]

//example 3
console.log(arr1.fill(6)); //[6,6,6,6]
// value to fill the array with  note all element in the array will be exact value 
//if value is an object each slot in the array will refrences that array.

//exmple 4 
//fill method fills empty slot in spares array with value as well
const tempGirls = Array(5).fill("girl", 0);
console.log(tempGirls);

//exmaple 4
console.log([1, 2, 3].fill(4));  //[4,4,4]
console.log([1, 2, 3].fill(4, 1)); //[1,4,4] 
console.log([1, 2, 3].fill(4, 1, 2)); //[1,4,3] 
console.log([1, 2, 3].fill(4, 1, 1)); // [1,2,3]
console.log([1, 2, 3].fill(4, 3, 3)); // [1, 2, 3]
console.log([1, 2, 3].fill(4, -3, -2)); // [4, 2, 3]
console.log([1, 2, 3].fill(4, NaN, NaN)); // [1, 2, 3]
console.log([1, 2, 3].fill(4, 3, 5)); // [1, 2, 3]

//if value is an object each slot in the array will refrences that array.
const arr3 = Array(3).fill({});[{}, {}, {}]
arr3[0].hi = 'hi'; //[{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]
console.log(arr3)


//calling fill() on non -array objects
const arrayLike1234 = { length: 2 };
console.log(Array.prototype.fill.call(arrayLike1234, 1));



// note :
// callback function is invoked only for array indexes which have assigned value it
//not invoked for empty slots in spares array

//----------------------------------------------------------------------------------


// 7.Array.prototye.filter(callback_function, thisarg)
// The filter() method create a shallow copy of a portion of given array ,and filtered down to just
// the element from the given array that pass the test implement by the provided function
// The filter() method, in fact, does not modify the original array. It returns a new array containing the elements that
// satisfy the filtering condition specified by the callback function.
//If no elements pass the test, an empty array will be returned.
//  filter() method itarative method ,call a provided call back function once for each element in the array
//and construct new array of all the value for which callback function return truely value.
// example 1  
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const newWord = words.filter((ele, index, array) => {
    return ele.length > 6
});
console.log(newWord);

//exmaple 2 
//filtering out all samll value which is less then 10
const filtered = [12, 5, 8, 130, 44]
const newArea = filtered.filter((element) => {
    return element >= 10
})
console.log(newArea);

//example 3 
//find  all prime number in an array.
//prime number natural number grater then one that has no positive divisors other then one itself
const art = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}console.log(art.filter(isPrime));

//example 4
// filtering invalid entires from json
const arr12345 = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    {},
    { id: null },
    { id: NaN },
    { id: "undefined" },
];  
let invalidEntries =0;
function filterById(item){
    if(Number.isFinite(item.id) && item.id !== 0){
        return true;
    }
    invalidEntries++;
    return false;
}
const arrByID = arr12345.filter(filterById);
console.log("Filtered Array\n", arrByID);
// Filtered Array
// [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]

console.log("Number of Invalid Entries =", invalidEntries);

//exmaple 5
//Searching in array 
//filtered () array contnet based on search criteria
const fruits = ["apple", "banana", "grapes", "mango", "orange"];
function filterItem(arr,quary){
    return arr.filter((e1)=> e1.toLowerCase().includes(quary.toLowerCase()));
}
console.log(filterItem(fruits,'ap'));
console.log(filterItem(fruits,'an'));

//example 6
//using filter() on sparse array
console.log([1, ,undefined].filter((x)=> x === undefined));//[undefined]
console.log([1, ,undefined].filter((x)=> x !==2)) //[1,undefined]


//example 7 
//
const arrayLikecv = {
    length: 3,
    0: "a",
    1: "b",
    2: "c",
    3: "a", // ignored by filter() since length is 3
};
console.log(Array.prototype.filter.call(arrayLikecv, (x) => x <= "b"));
// [ 'a', 'b' ]

//example 8
//following example tests the behavior of the filter method when the array is modified.
let wordss = ["spray", "limit", "exuberant", "destruction", "elite", "present"];
const modifiedword = wordss.filter((word,index,array)=>{
    arr[index +1] +=  'extra'; 
    return word.length < 6
});
console.log(modifiedword);

// Appending new words
wordss = ["spray", "limit", "exuberant", "destruction", "elite", "present"];
const appendedWords = words.filter((word, index, arr) => {
    arr.push("new");
    return word.length < 6;
});

console.log(appendedWords);
// Only three fits the condition even though the `words` itself now has a lot more words with character length less than 6
// ["spray" ,"limit" ,"elite"]

// Deleting words
wordss = ["spray", "limit", "exuberant", "destruction", "elite", "present"];
const deleteWords = words.filter((word, index, arr) => {
    arr.pop();
    return word.length < 6;
});

console.log(deleteWords);
// Notice 'elite' is not even obtained as it's been popped off 'words' before filter can even get there
// ["spray" ,"limit"]

//--------------------------------------------------------------------------------

//  8 Array.prototype.find( callback_function, thisArg) ;
//The find()  method return the first element in the provided array that satisfied the provided testing function
//if no value satisfied the testing function undefied is return.
const array12 = [5, 12, 8, 130, 44];
const find = array12.find(element=>element < 10);
console.log(find);

//exmaple 2 
// find an objects in an array by on of its properties
const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];
function ischerries (fruit){
    return fruit.name === 'cherries';
}
console.log(inventory.find(ischerries));

// by using arrow function
const result = inventory.find(({name})=> name=== 'bananas');
console.log(result);

//example 3 
//find prime number in an array
// find the element in the array tha is prome number or return undefined if threr is no prime number
function isPrimeNumber (element, index, array){
    let start =2;
    while(start <= Math.sqrt(element )){
        if(element % start++ < 1){
            return false;
        }
    }
    return element > 1
} 
console.log([4, 6, 8, 12].find(isPrimeNumber)); //undefined
console.log([4, 5, 8, 12].find(isPrimeNumber));


// example 5
// using find on sparse array
const array222 = [0, 1, , , , 5, 6];
array222.find((element, index)=>{
    console.log('index', "+", index ,  "+ ", "value", element)
})
array222.find((element , index )=>{
    if(index ===0){
        console.log('deleting array with value ', array222[5])
     delete array[5];
    }
    console.log('index', "+", index, "+ ", "value", element)
})

// calling find() method on non-array objects
const array_Like = {
    length: 3,
    "-1": 0.1, // ignored by find() since -1 < 0
    0: 2,
    1: 7.3,
    2: 4,
};
console.log(Array.prototype.find.call(array_Like, (x) => !Number.isInteger(x)));

//-----------------------------------------------------------------------

//Array.prototype.findindex(callback_function, this arg)
//findIndex() method return index of the first element is an array that satisfied the providing 
// testing function 
//if no element satisfy the testing  function -1 is returned 
//example  1 
const array_1 = [5, 12, 8, 130, 44];
const findIndex  = array_1.findIndex((element,index,arr)=>{
    return element > 12
})
console.log(findIndex); // return index of the elment is an array that satisfied the providing testing function

//example 2 
//find the index of prime number in an array
function is_Prime(element){
    if(element % 2 ===0 || element <2){
        return false
    }
    // This is the condition that determines how long the loop will continue running. 
    //The loop will execute as long as the value of factor is less than or equal to the square root of the given number
     //The reason for using the square root is that, in order to find a factor of a number,
     // you only need to check divisors up to its square root.If there  are no divisors 
     //smaller than or equal to the square root, there won't be any divisors greater than the square root either.
    for(let factor =3 ;factor< Math.sqrt(element);factor+=2){
        if(element % factor  ===0){
            return false
        }
    }
    return true 
}
console.log([4, 6, 8, 9, 12].findIndex(isPrime)); // -1, not found
console.log([4, 6, 7, 9, 12].findIndex(isPrime)); // 2 (array[2] is 7)

// exmaple 3 
//using finedIndex on non-array object.
const arraLike = {
    length: 3,
    "-1": 0.1, // ignored by findIndex() since -1 < 0
    0: 2,
    1: 7.3,
    2: 4,
};
console.log(Array.prototype.findIndex.call(arraLike, (x)=>{
   return !Number.isInteger(x);
    // console.log(
    //     Array.prototype.findIndex.call(arraLike, (x) => !Number.isInteger(x)),
    // );
}));
// --------------------------------------------------------------------

//  9 Array.prototype.findlast( callback_functon , thisarg)
// findLast() iterate the array in reverse order and return the value of the first element (from reverse order ) that satisfied the 
//provided testing function 
// if the no element statify the testing function  undefined is returned.
//basically its return value of first matching in give condition satisfied with array
// return first  value in reverse order and return last vale in forward way

//example 1
const p = [5, 12, 50, 130, 44]; 
const findlstElement = p.findLast((x)=>{
    console.log('reverse Order', x);
    return x > 45;
})
console.log(findlstElement);


//It calls a provided callbackFn function once for each element in an array in 
//descending-index order, until callbackFn returns a truthy value. 
//findLast() then returns that element and stops iterating through the array

//example 2
//find last object in an array matching on elmlent properties
const inventory123 = [
    { name: "apples", quantity: 2 },
    { name: "bananas", quantity: 0 },
    { name: "fish", quantity: 1 },
    { name: "cherries", quantity: 5 },
];
const find1 = inventory123.findLast((element)=>{
    return element.quantity <2;
})
console.log(find1);
//------------------------------------------------------------------------------        

//  10 Array.prototype.findLastIndex();
//The findLastIndex() method iterates the array in reverse order and return the index of the first 
//element that satisfied the provided testing  function
// if no elements that satisfied  the testing function -1 returned 

//using findLastindex() on sparse array();
//you can search for undefined in aspare array and get the index of an array 
console.log([1, , 3].findLastIndex((x) => x === undefined)); // 1

//calling findLastindex() on non-array objects
// Here declare the example array for above exampel :
const arrayLike3 = {
    length: 3,
    0: 2,
    1: 7.3,
    2: 4,
    3: 3, // ignored by findLastIndex() since length is 3
};
console.log(Array.prototype.findLastIndex.call(arrayLike3,(x)=>{
    return Number.isInteger(x)
}))

//Array.prototype.flat(depth) : (number of array will be created.)
//a flat method create a new array with all sub-array elements concatenated into it 
//recursively up to the specified depth
// a new array with the sub-array elements concatenated into it 
// flat() method is copying method it does not alter this but instead return sahallow copy that contain the same 
//element as the one from the origional array.

//example1
//flatting nested array 
const arr12 = [1, 2, [3, 4]];










