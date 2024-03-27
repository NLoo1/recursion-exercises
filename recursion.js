/** product: calculate the product of an array of numbers. */

function product(nums) {
  if(nums.length == 0) return 1
  return nums[0] * product(nums.slice(1))
}

// /** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if(words.length == 0) return 0 
  return Math.max(words[0].length, longest(words.slice(1)))
}

// /** everyOther: return a string with every other letter. */

function everyOther(str) {
  if(str.length == 0) return ""
  return str[0] + everyOther(str.slice(2))
}

// /** isPalindrome: checks whether a string is a palindrome or not. */

// racecar
function isPalindrome(str) {
  if(str.length==0 || str.length ==1) return true
  if (str[0] == str[str.length-1]) return isPalindrome(str.slice(1,-1))
  else return false
}

// /** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  if(arr.length == 0) return -1
  if(arr[0] == val) return 0
  else{
    const result = findIndex(arr.slice(1), val);
    if (result === -1) return -1
    else return 1 + result
  }
}

// /** revString: return a copy of a string, but in reverse. */

// abc
function revString(str) {
  if(str.length == 0) return ""
  return revString(str.slice(1)) + str[0]
}

// /** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let stringValues = [];

  function traverseObject(obj) {
      for (let key in obj) {
          if (typeof obj[key] === 'string') {
              stringValues.push(obj[key]);
          } else if (typeof obj[key] === 'object') {
              traverseObject(obj[key]);
          }
      }
  }

  traverseObject(obj);
  return stringValues;
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings
};
