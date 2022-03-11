//Sliding Window Pattern - This pattern involves creating a "window", which can either be an array or number from one position to another.  Depending on a certain condition, the window either increases or closes (and a new window is created).  V

//Very useful for keeping track of a subset of data in an array/string.

//EXAMPLE - Write a function called maxSubarraySum, which accepts an array of integers and a number called n.  The function should calulate the maximum sum of n consecutive elements in the array.

maxSubarraySum([1,2,5,2,8,1,5], 2) // 10
maxSubarraySum([1,2,5,2,8,1,5], 4) // 17
maxSubarraySum([4,2,1,6], 1) // 6
maxSubarraySum([4,2,1,6,2], 4) // 13
maxSubarraySum([], 4) // null

//THE FUNCTION - Time Complexity => O(N)

function maxSubarraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum;
}

//THE EXPLANATION
function maxSubarraySum(arr, num) {
    //Start with two variables, both set to 0 - maxSum and tempSum
    let maxSum = 0;
    let tempSum = 0;
    //Edge case:  if the length of the array is less than num, then you can't sum "num" numbers.  Return null.
    if (arr.length < num) return null;
    //Loop over all integers between zero and "num".  For each i, add arr[i] to maxSum.  This will give you an initial value for comparison.
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    //set tempSum equal to whatever maxSum's new value is.
    tempSum = maxSum;
    //Loop over the array starting at "num" position
    for (let i = num; i < arr.length; i++) {
        //Take the current value of tempSum (which is initially equal to maxSum) and subtract the value of the first number in the sequence, then add the next number in the array.
        tempSum = tempSum - arr[i - num] + arr[i];
        //Compare the value of maxSum to tempSum.  Set maxSum equal to the higher value.
        maxSum = Math.max(maxSum, tempSum)
    }
    //Once you've looped through the array, whatever is set to maxSum is the highest sum, so return it.
    return maxSum;
}

//ANOTHER EXAMPLE - Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of  a subarray with the length of the number passed to the function.

//Note that a subarray must consist of consecutive elements from the original array.  In the first example below, [100,200,300] is a subarray of the original array, but [100,300] is not.

maxSubarraySum([100,200,300,400], 2) //700
maxSubarraySum([1,4,2,10,23,3,1,0,20], 4) //39
maxSubarraySum([-3,4,0,-2,6,-1], 2) //5

//THE FUNCTION
function maxSubarraySum(arr, length) {
    let maxSum = 0;
    let tempSum = 0;
    if(arr.length < length) return null;
    for (let i = 0; i < length; i++) {
      maxSum += arr[i]
    }
    tempSum = maxSum;
    for (let i = length; i < arr.length; i++) {
      tempSum = tempSum - arr[i - length] + arr[i];
      maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum;
  }

  //THE EXPLANATION
  function maxSubarraySum(arr, length) {
    let maxSum = 0;
    let tempSum = 0;
    //Edge case - if there are fewer numbers in the array than the length of the subarray, then return null.
    if(arr.length < length) return null;
    //this creates a "starter" sum by finding the sum of numbers for the length required beginning at the zero index. -- i.e. it creates the "sliding window" you'll use to find the correct subarray of values.
    for (let i = 0; i < length; i++) {
      maxSum += arr[i]
    }
    tempSum = maxSum;
    //loop through the entire array.  Each time you iterate, reset tempSum by subtracting the value at the beginning of the subarray and adding the value immediately following the end of the subarray.  Compare tempSum with maxSum.  If tempSum is greater, set tempSum as maxSum and continue iterating
    for (let i = length; i < arr.length; i++) {
      tempSum = tempSum - arr[i - length] + arr[i];
      maxSum = Math.max(maxSum, tempSum)
    }
    //once you've iterated through the entire array, return the final value of maxSum as this will be the maximum sum.
    return maxSum;
  }

//ANOTHER EXAMPLE - Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

//This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function, if there isn't one, return 0 instead;

minSubArrayLen([2,3,1,2,4,3], 7) //2 => because [4,3] is the smallest subarray
minSubArrayLen([2,1,6,5,4], 9) //2 -> because [5,4] is the smallest subarray
minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) //1 -> because 62 is greater than 52
minSubarrayLen([1,4,16,22,5,7,8,9,10], 39) //3
minSubArrayLen([1,4,16,22,5,7,8,9,10], 95) //0 


//THE FUNCTION
function minSubArrayLen(nums, sum) {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;
   
    while (start < nums.length) {
     
      if(total < sum && end < nums.length){
        total += nums[end];
              end++;
      }
      
      else if(total >= sum){
        minLen = Math.min(minLen, end-start);
              total -= nums[start];
              start++;
      } 
            
      else {
        break;
      }
    }
   
    return minLen === Infinity ? 0 : minLen;
  }

  //THE EXPLANATION
  function minSubArrayLen(nums, sum) {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;
    
    while (start < nums.length) {
      // if current window doesn't add up to the given sum then 
          // move the window to right
      if(total < sum && end < nums.length){
        total += nums[end];
              end++;
      }
      // if current window adds up to at least the sum given then
          // we can shrink the window 
      else if(total >= sum){
        minLen = Math.min(minLen, end-start);
              total -= nums[start];
              start++;
      } 
      // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
      else {
        break;
      }
    }
   
    return minLen === Infinity ? 0 : minLen;
  }

  //ANOTHER EXAMPLE - Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

  findLongestSubstring(""); //0
  findLongestSubstring("rithmschool") //7
  findLongestSubstring("thisisawesome") //6
  findLongestSubstring("thecatinthehat") //7
  findLongestSubstring("bbbbbb") //1
  findLongestSubstring("longestsubstring") //8
  findLongestSubstring("thisishowwedoit") //6

  //THE FUNCTION
  function findLongestSubstring(str) {
    let longest = 0;
    let seen = {};
    let start = 0;
   
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (seen[char]) {
        start = Math.max(start, seen[char]);
      }
      // index - beginning of substring + 1 (to include current in count)
      longest = Math.max(longest, i - start + 1);
      // store the index of the next char so as to not double count
      seen[char] = i + 1;
    }
    return longest;
  }

  //THE EXPLANATION

  function findLongestSubstring(str) {
    let longest = 0;
    let seen = {};
    let start = 0;

    //Loop over the string;
    for (let i = 0; i < str.length; i++) {
        //let char be equal to the character we're currently on in the string;

      let char = str[i];
      //if the seen object has a key of char, set start equal to the maximum between start and seen[char]
      if (seen[char]) {
        start = Math.max(start, seen[char]);
      }

      // index - beginning of substring + 1 (to include current in count)
      longest = Math.max(longest, i - start + 1);
      // store the index of the next char so as to not double count
      seen[char] = i + 1;
    }
    return longest;
  }