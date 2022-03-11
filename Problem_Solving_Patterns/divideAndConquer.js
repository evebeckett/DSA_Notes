//Divide and Conquer Pattern - This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data.

//This pattern can tremendously decrease time complexity

//This is a slightly more complex pattern and is frequently used in things like sorting algorithms and binary trees, etc.

//EXAMPLE - Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located.  If the value is not found, return -1.

search([1,2,3,4,5,6], 4) // 3
search([1,2,3,4,5,6], 6) // 5
search([1,2,3,4,5,6], 11) // -1

//THE FUNCTION - Time Complexity => Log(N) 
    //NOTE:  This is BINARY SEARCH

function search(array, val) {
    let min = 0;
    let max = array.length - 1;

    while (min <= max) {
        let middle = Math.floor((min + max) / 2)
        let currentElement = array[middle];

        if (currentElement < val) {
            min = middle + 1;
        }
        else if (currentElement > val) {
            max = middle - 1;
        }
        else {
            return middle;
        }
    }

    return -1;
}

//THE EXPLANATION
function search(array, val) {
    //Find your minimum and maximum indices.  The min will be the zero index.  The max will be the length of the array minus one (because indexes start at 0).
    let min = 0;
    let max = array.length - 1;
    
    while (min <= max) {
        //find the middle value in the array. Let middle be equal to the middle index 
        let middle = Math.floor((min + max) / 2)
        //currentElement is the middle VALUE
        let currentElement = array[middle];
        //if currentElement (the middle value) is less than the value we're looking for, we can eliminate the 1st half of the array.  Move the min pointer to the middle index + 1 and then loop again.
        if (currentElement < val) {
            min = middle + 1;
        }

        //if currentElement (the middle value) is greater than the value we're looking for, we can eliminate the 2nd half of the array.  Move the max pointer to the middle index - 1 and then loop again.
        else if (currentElement > val) {
            max = middle - 1;
        }
        //if currentElement is not greater than or less than the value we're searhing for, then it must be equal to the value.  In that case, return middle, which is the index at the center of the array we're searching (and the index of the value we're searching for).
        else {
            return middle;
        }
    }
    //If we've searched the entire array and found no matches, that means it doesn't exist in the array.  Return -1.
    return -1;
}