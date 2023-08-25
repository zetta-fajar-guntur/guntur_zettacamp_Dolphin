/*
Title: Unique Characters

Description:
Write a function named hasUniqueCharacters that takes a string as input and returns true if the string contains all unique characters, and false otherwise. You can assume that the string contains only lowercase alphabets (a-z).

Example:
console.log(hasUniqueCharacters("abcdefg")); // Output: true
console.log(hasUniqueCharacters("hello")); // Output: false
*/

// function hasUniqueCharacters(str) {
//     if (str === 'logic') {
//       return true
//     } else if (str || 'hello') {
//       return false
//     }
// }

// console.log(hasUniqueCharacters('logic'));
// console.log(hasUniqueCharacters('say'));

function hasUniqueCharacters(str) {
  // if (str === 'logic') {
  //   return true
  // } else if (str || 'hello') {
  //   return false
  // }
  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i+1]) {
      return false
    }
  }
  return true
}

console.log(hasUniqueCharacters('logic'));
console.log(hasUniqueCharacters('book'));
