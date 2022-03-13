//Recursion - A process (a function in our case. . . ) that calls itself.

//How recursive functions work - Invoke the same function with a different input until you reach your base case!
    //Two essential parts of a recursive function: 
        //base case - the condition when the recursion ends
        //Different input - the recursive call called with a different piece of data each time.
        
//It's everywhere!
    //JSON.parse/JSON.stringify
    //documentgetElementById and DOM traversal algrorithms
    //object traversal
    //We will see it with more complex data structures
    //It's sometimes a cleaner alternative to iteration

//The Call Stack - In almost all program languages, there is a built in data structure that manages what happens when functions are invoked.  
    //It's a stack data structure
    //Any time a function is invoked, it is placed(pushed) on the top of the call stack.
    //When JavaScript sees the return keyword or when the function ends, the compiler will remove(pop)

    //Why do I care?
        //You're used to functions being pushed on the call stack and popped off when they're done.
        //When we write recursive functions, we keep pushing new functions onto the call stack.

