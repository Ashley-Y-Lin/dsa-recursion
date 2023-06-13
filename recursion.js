"use strict";

/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) return 1;

  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 0) return 0;

  return Math.max(words[0].length, longest(words.slice(1)));
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length === 0) return "";

  return str[0] + everyOther(str.slice(2));
}

/** find: return boolean depending on if val exists in array or not. */

function find(arr, val) {
  if (arr.length === 0) return false;

  return ((arr[0] === val) || find(arr.slice(1), val));
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length <= 1) return true;

  if (str[0] === str[str.length - 1]) {
    return isPalindrome(str.slice(1, -1));
  } else {
    return false;
  }
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str.length === 0) return "";

  return str[str.length - 1] + revString(str.slice(0, str.length - 1));
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
  if (arr.length === 0) return -1;

  if (arr[0] !== val) {
    return findIndex(arr.slice(1), val, i + 1);
  } else {
    return i;
  }
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, out = [], i = 0) {
  if (Object.keys(obj).length === i) return out;

  if (typeof obj[Object.keys(obj)[i]] === "object") {
    out.push(...gatherStrings(obj[Object.keys(obj)[i]]));
  } else if (typeof obj[Object.keys(obj)[i]] === "string") {
    out.push(obj[Object.keys(obj)[i]]);
  }

  return gatherStrings(obj, out, i + 1);
}

// FURTHER STUDY

/** binarySearch: given a sorted array of numbers, and a value,
 * return true if val is in array, false if not present). */

function binarySearch(arr, val) {
  if (arr.length === 0) return false;

  const mid = Math.floor(arr.length / 2);

  if (arr[mid] === val) {
    return true;
  } else if (val > arr[mid]) {
    return binarySearch(arr.slice(mid + 1, arr.length), val);
  } else if (val < arr[mid]) {
    return binarySearch(arr.slice(0, mid), val);
  }
}


/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearchIndex(arr, val, left = 0, right = arr.length - 1) {
  if (right < left) return -1;

  const mid = Math.floor((right + left) / 2);

  if (arr[mid] === val) {
    return mid;
  } else if (val > arr[mid]) {
    return binarySearchIndex(arr, val, mid + 1, right);
  } else if (val < arr[mid]) {
    return binarySearchIndex(arr, val, left, mid - 1);
  }
}

// you might find the above two problems easier if you change the function signature to:
//
// function binarySearch(arr, val, left = 0, right = arr.length) {
//
// }


module.exports = {
  product,
  longest,
  everyOther,
  find,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
  binarySearchIndex,
};
