/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  count = 0;
  testStr = str.split("");
  for (let i = 0; i <= testStr.length; i++) {
    if (
      (testStr[i] == "a") |
      (testStr[i] == "e") |
      (testStr[i] == "i") |
      (testStr[i] == "o") |
      (testStr[i] == "u") |
      (testStr[i] == "A") |
      (testStr[i] == "E") |
      (testStr[i] == "I") |
      (testStr[i] == "O") |
      (testStr[i] == "U")
    ) {
      count += 1;
    }
  }
  return count;
}

module.exports = countVowels;
