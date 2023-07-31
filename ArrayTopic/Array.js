//*  Array (array are object, non-Primitive, resuble, contain mix differnet data type,are zero=indexed,
// also create shallow copy)
//*  def : Array collection of multiple type of data strored in single varaible with the help square bracket
// Array also refrences type in javascript
// --------------------------------------------------------------------------------

//*  1. How to create array
// 1.first method literal notation
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1];
console.log(number);

//2.second method using array constructor
//*  anothe way to create array in create an intances of array and put value on it
//Array constructor  Array() --> create new Object
// also called Array() --> array called with new or without new array instances
//ex. Array(element) --> or --> Array(arrayLength);
let myNumbers = new Array();
myNumbers = [10, 20, 30, 40, 50, 60];
console.log(myNumbers);

//3 method using the Array.prototyp.split(",")
const fruits1 = "apple, banana, mango".split(", ");

// by using split method only possible when you defined the string.not used for number.
const num = " 1, 2, 3, 4 ".split(",");
console.log("num", num); //num [ ' 1', ' 2', ' 3', ' 4 ' ]
console.log("fruitarray", fruits1); //fruitarray [ 'apple', 'banana', 'mango' ]

// ----------------------------------------------------------------

let years = "vishal";
console.log(years["2"] !== years["02"]); //true

// ---------------------------------------------------------

//* length of the array
//length is the property of the array.
const fruits = [];
fruits.push("banana", "apple", "peach");
console.log(fruits.length);

//setting a property
fruits[5] = "Pine-Apple";

//following method return key of the array i.e index value
console.log(Object.keys(fruits));
console.log(fruits);

//return the value in the given array
console.log(Object.values(fruits));

// Decreasing the length property does, however, delete elements.
console.log((fruits.length = 2));
console.log(Object.keys(fruits));

// -----------------------------------------------------------------

//* in array if you used callback funton take three argument first is element sencond is index and third is array.
//* so callback function is expected to return depends on the array method that was called.

// ------------------------------------------------------------------

//* Array constructor with single parameter
//if you defined only single parameter in constructor than is access as length of the array
const arrayEmpty = new Array(10);
console.log(arrayEmpty.length); //10
console.log(arrayEmpty[1]); //undefined
console.log(0 in arrayEmpty); // false
console.log(1 in arrayEmpty); //false

//anothe example
const arrayOfOne = new Array("10");
console.log("lengt of the arrayOne", arrayOfOne.length); // 1
console.log("element of the array", arrayOfOne[1]); // undefined
// ------------------------------------------------------------------
//* instances properties defined by Array.prototype

//Example:

// 1. how to  Creating string from an array.
//join() method used to create a string from an array.
const fName = ["apple", "mango"];
const string = fName.join(", ");
console.log(string); //apple,mango
// ----------------------------------------------------

//2.access An array item by its index
//show the how to access the item in the array by specifying the index number.
const array = ["vishal", "Ganesh", "ram", "Krishan"];
console.log(array[0]); // 'vishal'
console.log(array[1]); //'Ganesh'

//so index of the array is always less then one of its length
console.log(array.length - 1); //3
console.log(array[99]); // undefined
// ----------------------------------------------------------

//3. find the index of an item in an array.
const fruits2 = ["Apple", "Banana"];
// so indexof() method find the position (index) of given string.
console.log(fruits2.indexOf("Apple")); // return 0;
const data = fruits2.indexOf("Banana");
console.log("data", data);

//in array indexOf() method find the positon (of index) if not found elemet its return -1;
console.log(fruits2.indexOf("mango")); // return -1
// --------------------------------------------------------------

// 4. check if an array contain a certain item or not
const fruits3 = ["Apple", "Banana"];

//include method check if the given item is present or not if present return true or if not present return false.
console.log(fruits3.includes("Apple")); //return true
console.log(fruits3.includes("Mango")); // return false

// another way to check if the item is present or not by using index of method.
// if present then not equal to -1 or  or if not present then equal to -1
console.log(fruits3.indexOf("Apple") !== -1); // return true
console.log(fruits2.indexOf("mango") !== -1); //return false
// ---------------------------------------------------------------

// 5. How to append an item to array
// using Push() method to append a new string to a array.
const fru = ["Apple", "Banana"];
const newFru = fru.push("mango", "lemon");
console.log(fru);

// push method append new item in the array and return new array length;
//push the element at the end of the array.
console.log("psuh Method :", fru.push("Water-Melon"));
console.log(newFru);
console.log(fru);
//-----------------------------------------------

//6. Remove last element of an array
const arr = ["Apple", "Banana", "mango", "lemon", "Water-Melon"];

//pop method used to remove the last element of the array
// pop() method return the remove element
const removeLastElemnt = arr.pop(); // return water-melon;

console.log(removeLastElemnt); // print water-Melon
console.log(arr); // return the remaining array.

// Note: pop() method can only used to remove the last item from an array to remove multiple item from an end of the array used next example
// --------------------------------------------------------------------

//7. remove multiple item from the end of an array
const Arr = ["Apple", "Banana", "Strawberry", "Mango", "Cherry"];

// splic(start,deleteCount, ) method used to remove the element from Given start position
const removeMayElement = Arr.splice(3);

// splice() method return the array containing the delete Element.
console.log("removeElement", removeMayElement);
console.log(Arr);

//another Example for removeing last three element
const start = -3;
const removelast = Arr.splice(start);
console.log("remove Element: ", removelast);
console.log(Arr);
//---------------------------------------------------------------

//8.Truncate an array down to just its first N items
const fruitName = ["Apple", "Banana", "Strawberry", "Mango", "Cherry"];
//splic method contain 2 argument first is starting , and second is delete count
const truncate = fruitName.splice(2, 2);
console.log("truncate", truncate);
console.log(fruitName);
// --------------------------------------------------

//9.Remove the first item of the array.
const item = ["Apple", "Banana", "Strawberry", "Mango", "Cherry"];

//shift() method used to remove the first element of the array
const first = item.shift();
// shift method return the deleted element of the array
console.log("first Remove", first);
console.log(item);
//so shift item only used to remove the first item from the array if you want to delete multiple item form beginning
// you have to used the splic method();
//----------------------------------------------------------------

// 10 remove the multiple item from the beginning of an array
const item1 = ["Apple", "Banana", "Strawberry", "Mango", "Cherry"];
//by using splic() method you have to remove the multiple item from starting
// so starting argument pass as 0 and delete count pass as 3 so it delete item from 0,1,2,index.
const multipleRemoveFromFirst = item1.splice(0, 3);
console.log("multipleRemoveFromFirst", multipleRemoveFromFirst);
console.log(item1);
//--------------------------------------------------------

//11.Add first new item to an array
const item2 = ["Apple", "Banana", "Strawberry", "Mango", "Cherry"];
//unshift method used to add the element at first position
const newItem = item2.unshift("Grapes");
//unshift() method return new length of the array
console.log("newItem", newItem);
console.log(item2);
//-----------------------------------------------------

//12 .remove the single item by index.
const item3 = ["Apple", "Banana", "Strawberry", "Mango", "Cherry"];
// to removing the specified item by finding the index of that item
const rem = item3.indexOf("Mango");
//splic method return array with deleted element
const removed = item3.splice(rem, 1);
console.log("removed", removed);
//--------------------------------------------------------

//13 Remove multiple item by index
const item4 = ["Apple", "Banana", "Strawberry", "Mango", "Cherry"];
const del = 1;
const count = 2;
//specifying the index positon along with number of count of the total number of delet item
const removeMultiple = item4.splice(del, count);
console.log("removeMultiple", removeMultiple);
console.log(item4);
//-----------------------------------------------------
//14 Replace or add  multiple item in an array.
// to replace multiple item also used splic method
const item5 = ["Apple", "Banana", "Strawberry", "Mango", "Cherry"];
// add the multiple element to the starting of the elemeent
const Add = item5.splice(0, 0, ["pineApple", "Grapes"]);
// also you have ot replace the element of the give array by using splic metho
const replace = item5.splice(2, 1, "a", "b", "c");
console.log("replace", replace);
console.log("add", Add);
console.log(item5);
//----------------------------------------------

//15.iterate over array...
// for of loop to iterate over the array it return each and every element of an array
//(for of loop through the value of an iterable object or loop over the iterable data structure string and array);
// only iterate over the itarable objct.

const name = ["Apple", "Banana", "Strawberry", "Mango", "Cherry"];
for (const fruit of name) {
  console.log("array Element: ", fruit);
}
//---------------------------------------------------
//16 call a function on each element of the array
//forEach() method call a function on each element in the array
// the function cause each item to be logged to the console along with item index number.
const fruits11 = ["Apple", "Mango", "Cherry"];
fruits11.forEach((item, index, array) => {
  console.log("item", item);
  console.log("index", index);
  console.log("array", array);
});
//----------------------------------
//18 Merge multiple array togather..
const fruits12 = ["Apple", "Banana", "Strawberry"];
const moreFruits = ["Mango", "Cherry"];
const moreFruits2 = ["grapes"];
//by using the concat method you can merged one array into another array and create combined new array.
//so concat method return new array
// existing array remains same (not modified the existing array)
const combinedArray = fruits.concat(moreFruits, moreFruits2);
console.log("combineFruits: ", combinedArray);
console.log(fruits);
console.log(moreFruits);
//----------------------------------------------------

//19 How to copy an array...
// There are many way to create the copy of the array
//using spread [...array] operator
// using from() method
// using splic method.

// using spread operator....
const name1 = ["Apple", "Banana", "Strawberry", "Mango", "Cherry"];
// here you have to create shallo copy
const newArray = [...name1];
console.log("newArray", newArray);

// if you add some thing in new array not added to the origional array.
newArray.unshift("Guava");

console.log("name1", name1);
console.log("new-newArray", newArray);
console.log(name1 == newArray); // return false
//Because This is because arrays are reference types in JavaScript,
//and when you use the comparison operator (==) to compare two arrays,
//it checks whether they refer to the same object in memory, not if they have the same contents.
//In this case, even though the contents of name1 and newArray are the same, they are two separate instances in memory,
//and thus the comparison returns false.(it is shallo copy )
//------------------------------------------------------------

//if you what to deep copy of an array you can used the json.stringify() to convert the array to json string and then Json.parse()
//to convert the string  back into a new array thats compleately independent from the origional array
// Json stringify value convert javascript object into the Json string representation

console.log(
  "Array are Equivalent ",
  JSON.stringify(name1) === JSON.stringify(newArray)
);

//2.create the array copy using the from() method
const value = ["Apple", "Banana", "Strawberry", "Mango", "Cherry"];
const newarray1 = Array.from(value);
console.log("newArray1", newarray1);
console.log("value", value);

// add new elenent into the new copy array
// it only added into the new array so if you copy the array using spread operator or using Array.from() metho
// so array return new array with new refrences object (or new instance of the array )
// not created same refrences of the origional array creat new refreces object.
newarray1.unshift("Papita");
console.log("new-newArray", newarray1);
console.log("value", value);

// 3.create the copy of the array by using the splic method of the array.
const value1 = ["Apple", "Banana", "Strawberry", "Mango", "Cherry"];
// if you want to copy whole array into the another array used splic method without arguments.
const copyArray = value1.slice();
console.log("copy_array", copyArray);
console.log("value1", value);

// add new element into the copy array then not updated into the origional array
// unshift method does not create new array add fist position element into the existing array.
const hi = copyArray.unshift("Hi");
console.log("unshift method return new array length", hi);
console.log(copyArray);
console.log(value);

//-----------------------------------------------------------

// 20.assigning an existing array to a new variable doesn't create a copy of either the array or its elements.
// Instead the new variable is just a reference, or alias, to the original array;
//that is, the original array's name and the new variable name are just two names for the exact same object

//if you make any changes at all either to the value of the original array or to the value of the
// new variable, the other will change, too:
const fruitArray = ["Strawberry", "Mango"];
const newFruitArray = fruitArray;
console.log("fruitArray", fruitArray);
console.log("newFruitArray", newFruitArray);
// if you change an any array its change to the both array like origional array or assigned array
// so its having same refrences object.
newFruitArray.unshift("pineApple");
console.log("fruitArray", fruitArray);
console.log("newFruitArray", newFruitArray);

// 21. Grouping the element of the array.
// here inventory array and get the food object that have name and type
const inventory = [
  { name: "asparagus", type: "vegetables" },
  { name: "bananas", type: "fruit" },
  { name: "goat", type: "meat" },
  { name: "cherries", type: "fruit" },
  { name: "fish", type: "meat" },
];

// so grouping the element of the array used array.prototype.group() can used to group the element of the array
//using a test function that return a string that indicating the group of the current element

// to used group you supply a callback function that is called with the current element and the
// optionally current index and array and return a string indicating the group of the element.

// const result = inventory.group((type) => {
//   console.log(type);
// });
const result = inventory.group(({ type }) => type);
console.log(result.vegetables);
console.log(result.vegetables);
// so this example is pending because it show error like group is not function 


// * array Generic method 
// array method are always Generic - they dont access any internal data of the array objects 
//they only access the array element through the length prperty and the indexed elements
//that means they can be called on arr like objects as well

const arrayLike = {
  0:'a',
  1:'b',
  length: 2
}
console.log(Array.prototype.join.call(arrayLike, "+")); // a+b
