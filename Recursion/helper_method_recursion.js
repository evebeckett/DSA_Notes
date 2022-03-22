//Helper Method Recursion - We have two functions:
    //the outer function
    //the recursive function inside

//commonly done when we need to compile an array or list of data

//EXAMPLE - collect all the odd values in an array

function collectOddValues(arr) {
    let result = [];
    function helper(helperInput) {
        if (helperInput.length === 0) {
            return;
        }

        if (helperInput[0] % 2 !== 0) {
            result.push(helperInput[0])
        }
        helper(helperInput.slice(1))
    }
    helper(arr);
    return result;
}

//The Explanation - Without the helper function inside collectOddValues, result would be reset every time.  That's why we need the helper function in this case.

function collectOddValues(arr) {
    //set result equal to an empty array from OUTSIDE the helper function.  This ensures that it will not reset every time the helper function is called.
    let result = [];
    //call a helper function that manipulates result from inside collectOddValues.
    function helper(helperInput) {
        //base case
        if (helperInput.length === 0) {
            return;
        }
        //If the helperInput[0] is odd, push it into the result array;
        if (helperInput[0] % 2 !== 0) {
            result.push(helperInput[0])
        }
        //remove the first number in the array and call the helper function again.
        helper(helperInput.slice(1))
    }
    //make the initial call to helper with the complete array as your parameter
    helper(arr);
    //return the result
    return result;
}

//NOTE:  YOU CAN SOLVE THIS PROBLEM USING PURE RECURSION, BUT THAT DOESN'T NECESSARILY MAKE IT A "BETTER" WAY OF DOING THINGS

//USING PURE RECURSION -

function collectOddValues(arr) {
    let newArr = [];
    if (arr.length === 0) {
        return newArr;
    };
    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0]);
    };
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}

//PURE RECURSION TIPS:
    //For arrays, use methods like slice, the spread operator, and concat that make copies of arrays so you do not mutate them.
    //Remember that strings are immutable, so you will need to use methods like slice, substr, or substring to make copies of strings
    //To make copies of objects, use Object.assign or the spread operator.