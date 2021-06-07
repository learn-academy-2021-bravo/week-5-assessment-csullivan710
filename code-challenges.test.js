// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

const { expect } = require("@jest/globals")
const { full } = require("acorn-walk")
const { contains } = require("micromatch")
const { Str } = require("prelude-ls")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with an expect statement using the variables provided.

var secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
var secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
var secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

//Make describe and function
//Test for string to expect: "L4ck4d41s1c4l", "G0bbl3dyg00k", & "Eccentric"
// describe("encode", () =>{
//     test ("returns an encoded message", () => {
//         expect(encode(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
//         expect(encode(secretCodeWord2)).toEqual("G0bbl3dyg00k")
//         expect(encode(secretCodeWord3)).toEqual("3cc3ntr1c")
//     })
// })



// // b) Create the function that makes the test pass.

// // define characters to find and replace
// var chars = {'a' : '4', 'e' : '3', 'i' : '1', 'o' : '0', 'A' : '4', 'E' : '3', 'I' : '1', 'O' : '0'}
// //make my function

// const encode = (string) => {
//     // return encoded string
//     return string.replaceAll(/[aeio]/ig, m => chars[m])
// }
// // find and change characters if they are present
// // return new string with characters changed




// --------------------2) Create a function that takes in an array and returns all the words that contain the letter a.

// a) Create a test with an expect statement using the variable provided.

var arrayOfWords1 = ["Apple", "Banana", "Plum", "Cherry", "Kiwi"]
// Expected output: ["Apple", "Banana"]
var arrayOfWords2 = ["Mango", "Orange", "Apricot", "Blueberry", "Peach"]
// Expected output: ["Mango", "Apricot", "Peach"]

//make describe and function
//test for expected  array of words
// describe("includesA", () =>{
//     test ("returns word containg a", () => {
//         expect(includesA(arrayOfWords1)).toEqual(["Apple", "Banana"])
//         expect(includesA(arrayOfWords2)).toEqual(["Mango", "Orange", "Apricot", "Peach"])

//     })
// })


// b) Create the function that makes the test pass.
//make function to test
// const includesA = (array) => {
//  //filter through array
// let filtered = array.filter(value => {
    // //checking to see if word has letter
//     let letter = value.includes('a') || value.includes('A')
//   //conditional if word has letter
//         if(letter === true){
//         return value
//         }
// })
// //return only string that contain
// return filtered
// }





// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with an expect statement using the variable provided.

 var hand1 = [5, 5, 5, 3, 3]
// // Expected output: true
 var hand2 = [5, 5, 3, 3, 4]
// // Expected output: false
 var hand3 = [5, 5, 5, 5, 4]
// // Expected output: false
describe ("fullHouse", () => {
    test("returns whether it is fullhouse or not", () => {
        expect(fullHouse(hand1)).toEqual(true)
        expect(fullHouse(hand2)).toEqual(false)
        expect(fullHouse(hand3)).toEqual(false)
    })
})




// // b) Create the function that makes the test pass.
//make function called fullHouse
const fullHouse = (array) => {
    //make new object
    let handObj = {}
    //loop through object
    for(let n of array){
      handObj[n] = (handObj[n] || 0) + 1;
    }
    //make variable for values and look through the made object
    let vals = Object.values(handObj);
    //look for 2 & 3 of a specific number
    if((vals[0] === 2 && vals[1] === 3) || (vals[1] === 2 && vals[0] === 3)){
        //if full house, return true
      return true;
    }
    //if not full house return false
    return false;
  }
  