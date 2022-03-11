//Multiple Pointers - Creating pointers or values that correspond to an index or position and move towards the beginning, middle, or end based on a certain condition. 

//VERY efficient for solving problems with minimal space complexity as well.

//EXAMPLE - Write a function called sumZero which accepts a sorted array of integers.  The function should find the first pair where the sum is 0.  Return an array that includes both values that sum to zero or undefined if a pair does not exist.

//THE FUNCTION - Time Complexity => O(N), Space Complexity => O(1)
function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if ( sum > 0) {
            right--
        } else {
            left++
        }
    }
}

//THE EXPLANATION
function sumZero(arr) {
    //create two pointers.  The left pointer begins at the first index in the array, which is 0.  The right pointer begins at the last index in the array, whose index is equal to the length of the array - 1.
    let left = 0;
    let right = arr.length - 1;
    //create a loop using the pointers.  While the left index is less than the right index (approaching the middle). . .
    while (left < right) {
        //add the value associated with the left index to the value associated with the right index.
        let sum = arr[left] + arr[right];
        //if the sum of the two values is equal to zero, return the two values in the array.
        if (sum === 0) {
            return [arr[left], arr[right]];
        //if the sum is greater than zero, keep the left pointer in place and move the right pointer down toward the middle and start the process over until either you find a zero sum or the sum becomes a negative number (meaning that the current left value doesn't have a corresponding right value that sums to zero because we would have found it in an ordered list before the sum became negative)
        } else if ( sum > 0) {
            right--
        //if the sum of the left value and the right value is less than zero, move the left pointer up one number and start the process over until either you find the two values that sum to zero or you confirm that it doesn't exist, in which case you return undefined.
        } else {
            left++
        }
    }
}

//ANOTHER EXAMPLE - Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array.  There can be negative numbers in the array, but it will always be sorted.

countUniqueValues([1,1,1,1,1,2]) //2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) //7
countUniqueValues([]) //0
countUniqueValues([-2,-1,-1,0,1]) //4

//THE FUNCTION
function countUniqueValues(arr) {
    if (arr.length === 0) {
      return 0;
    }
    if (arr.length === 1) {
      return 1;
    }
    let i = 0;
    let j = i + 1;
    while (j <= arr.length - 1) {
      if (arr[i] === arr[j]) {
        j++
      } else {
        arr.splice((i+1),1,arr[j])
        i++;
      }
    }
    return i+1
  }

  //ANOTHER EXAMPLE - Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string.  In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

  isSubsequence("hello", "hello world") //true
  isSubsequence("sing", "sting") //true
  isSubsequence("abc", "abracadabra") //true
  isSubsequence("abc", "acb") //false (order matters)

  //THE FUNCTION
  function isSubsequence(str1, str2) {
      var i = 0;
      var j = 0;

      if (!str1) return true;
      while(j < str2.length) {
          if (str2[j] === str1[i]) i++;
          if (i === str1.length) return true;
          j++
      }
      return false;
  }

  //THE EXPLANATION - This uses multiple pointers, but the two pointers are each pointing at different strings.

  function isSubsequence(str1, str2) {
  //create two "pointers" - i + j
    var i = 0;
    var j = 0;
    //edge case - if there is no Str1, then return true;
    if (!str1) return true;
    //while the j pointer index is less than the length of string 2. . .
    while(j < str2.length) {
        //if the character associated with str2[j] is the same as the character associated with str1[i], move the i pointer forward
        if (str2[j] === str1[i]) i++;
        //if i (the number of characters that are matching) is equal to the length of str1, then the entire subsequence has been located and you can return true;
        if (i === str1.length) return true;
        //move the j pointer forward by one character
        j++
    }
    //if you've made it through all of string2 and you still haven't matched i to str1.length, then the subsequence does not exist in str2.  Return false.
    return false;
}