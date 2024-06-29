/** product: calculate the product of an array of numbers. */

function product(nums, idx = 0 ) {
  if( idx === nums.length) return 0;
  return num[idx] * product(nums, idx +1)
 }

/** longest: return the length of the longest word in an array of words. */

function longest(words, idx = 0, longestWordSoFar = 0 ) {
  if (idx === words.length) return longestWordSoFar
   longestWordSoFar = Math.max(words[0].length, longestWordSoFar)
   return longest(words, idx + 1, longestWordSoFar )
  
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx = 0, newStr = "") {
  if (idx >= str.length) return newStr
  newStr += str[idx]
  return everyOther(str, idx + 2, newStr)

}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, idx = 0) {
  let leftidx = 0;
  let rightidx = str.length - idx -1;
  if (leftidx >= rightidx) return true
  if (str[leftidx] !== str[rightidx]){
    return false
  }
  return isPalindrome(str, idx + 1, )
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
  if(idx === arr.length) return -1;
  if (arr[idx] === val) return idx
  return (idx + 1, val, arr)
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx = 0, newStr = "") {
  if(newStr.length === str.length) return newStr
  newStr += str[str.length - 1 - idx]
  return (str, newStr, idx + 1)
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let stringArr = [];
  for (let key of obj){
    if (typeof obj[key] === "string") stringArr.push(obj[key]);
    if (typeof obj[key] === "object") stringArr.push(...gatherStrings(obj[key]));
  }
  return stringArr
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length) {
  if (left > right) retrn -1;
  if (arr[middle] === val) return middle
  if (arr[middle] >= val){
    return binarySearch(arr, val, left, middle -1)
  }
  if (arr[middle] <= val){
    return binarySearch(val, arr, middle +1, right)
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
