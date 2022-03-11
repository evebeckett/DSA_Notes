//Frequency Counters Pattern - This pattern uses objects/sets to collect values/frequencies of values.  This can often avoid the need for nested loops or O(N^2) operations with arrays/strings

//EXAMPLE:  Write a function called same, which accepts two arrays.  The function should return true if every value in the array has its corresponding value squared in the second array.  The frequency of the values must be the same.

same([1,2,3], [4,1,9]) //true
same([1,2,3], [1,9]) //false
same([1,2,1], [4,4,1]) // false (must be same frequency)

//THE FUNCTION -- Time Complexity is O(N)
function same (arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    } 
    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false;
        }
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false;
        }
    }
    return true;
}

//THE FUNCTION EXPLAINED
function same (arr1, arr2) {
    //if the array lengths are not the same, then the frequency cannot be the same, so return falses
    if (arr1.length !== arr2.length) {
        return false;
    }
    //create two variables and set them equal to empty objects
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    //loop over each value in the first array.  For each value, make it a key in frequencyCounter1 object and set the corresponding value to the previous value plus one.  If no value existed before, set the value to 1.
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    //loop over each value in the second array.  For each value, make it a key in frequencyCounter2 object and set the corresponding value to the previous value plus one.  If no value existed before, set the value to 1.
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }

    //loop over each key in the newly created frequencyCounter1 object.    
    for (let key in frequencyCounter1) {
        //If the key squared is not included in frequencyCounter2, return false. (Meaning the squared value doesn't exist in frequencyCounter2 at all)
        if (!(key ** 2 in frequencyCounter2)) {
            return false;
        }
        // if the key squared is in frequencyCounter2, but the frequencies (values of the respective objects) don't match, return false.  This would mean that the squared value exists in frequencyCounter2, but that the actual frequency doesn't match.
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false;
        }
    }
    //If you've made it this far, then that means that each key in frequencyCounter1 has a corresponding squared key in frequencyCounter2 and that the frequencies are matching.  Return true.
    return true;
}

//ANOTHER EXAMPLE

//Given two strings, write a function to determine if the second string is an anagram of the first.  An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema formed from iceman.

function anagram (string1, string2) {
    if (string1.length !== string2.length) {
      return false;
    }
    let obj1 = {};
    let obj2 = {};
  
    for (let char of string1) {
      obj1[char] = (obj1[char] || 0) + 1
    }
  
    for (let char of string2) {
      obj2[char] = (obj2[char] || 0) + 1
    }
  
    for (let key in obj1) {
      if (!(key in obj2)) {
        return false;
      }
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
    return true;
  }
  
  console.log(anagram("racecar", "carcare"));