//EXAMPLE

//THE FUNCTION
function countDown(num) {
    if (num <= 0) {
        console.log("All done!");
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}

//THE EXPLANATION
//If this is the function. . . 
function countDown(num) {
    if (num <= 0) {
        console.log("All done!");
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}
// . . . and this is the function call. . .
countDown(5)

// . . . this is how it is implemented.
function countDown(5) {
    if (5 <= 0) {
        console.log("All done!")
        return;
    }
    console.log(5)
    num = 5 - 1
    countDown(num = 4) {
        if (4 <= 0) {
            console.log("All done!")
            return;
        }
        console.log(4);
        num = 4 - 1;
        countDown(num = 3) {
            if (3 <= 0) {
                console.log("All done!")
                return;
            }
            console.log(3)
            num = 3 - 1;
            countDown(num = 2) {
                if (2 <= 0) {
                    console.log("All done!")
                    return;
                }
                console.log(2)
                num = 2 - 1;
                countDown(num = 1) {
                    if (1 <= 0) {
                        console.log("All done!")
                        return;
                    }
                    console.log(1);
                    num = 1 - 1;
                    countDown(num = 0) {
                        if (0 <= 0) {
                            console.log("All done!")
                            return;
                        }
                    }
                }
            }
        }
    }
}

//result:
5
4
3
2
1
All done!

//ANOTHER EXAMPLE

//The Function

function sumRange(num) {
    if (num === 1) return 1;
    return num + sumRange(num - 1);
}

//The Implementation

//If this is the function. . .
function sumRange(num) {
    if (num === 1) return 1;
    return num + sumRange(num - 1);
}

//. . . and this is the call. . .
sumRange(5)

//. . . then this is the implementation:

function sumRange(5) {
    if (5 === 1) return 1;
    return 5 + sumRange(5-1) { //returns 10 + 5 = 1 
                    return 4 + sumRange(4-1) {//returns 4 + 6 = 10;
                                    return 3 + sumRange(3-1) { //returns 3+3 = 6 
                                                    return 2 + sumRange(2-1) { //returns 2+1 = 3
                                                                    if (1===1) return 1   //returns 1
                                                                }
                                                }
                                }
                    }
}

//in order:

//sumRange(2-1) returns 1
//sumRange(3-1) returns 2+1 = 3
//sumRange(4-1) returns 3+3 = 6
//sumRange(5-1) returns 4+6 = 10
//sumRange(5) returns 5+10 = 15



