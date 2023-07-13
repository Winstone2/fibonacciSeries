function fibonacci(n) {
    //if (n <= 1): This condition checks if the input number n is less than or equal to 1.
    // If n is 0 or 1, the Fibonacci sequence is defined to be [0, 1].
    // In this case, the function immediately returns the array [0, 1].
    if (n <= 1) {
        return [0, 1];
    }
    //The code initializes an array called fibSeries with the initial values [0, 1].
    // This array will store the Fibonacci sequence as it is generated.
    const fibSeries = [0, 1];
    //The for loop is used to generate the remaining Fibonacci numbers.
    // It starts at index 2 because the initial two values [0, 1] are already in the fibSeries array.
    for (let i = 2; i <= n; i++) {
        //const nextFib = fibSeries[i - 1] + fibSeries[i - 2]: This line calculates the next Fibonacci number by adding the two previous numbers in the sequence.
        const nextFib = fibSeries[i - 1] + fibSeries[i - 2];
        //fibSeries.push(nextFib): The next Fibonacci number is then added to the fibSeries array using the push method.
        // This extends the sequence by one element in each iteration of the loop.
        fibSeries.push(nextFib);
    }
    //After the loop completes, the fibSeries array contains the Fibonacci sequence up to the desired length n.
    //The fibSeries array is returned as the final result of the fibonacci function.
    return fibSeries;
}

console.log(fibonacci(5)); // Output: [0, 1, 1, 2, 3, 5]
//Finally, console.log(fibonacci(5)); calls the fibonacci function, passing the number 5 as an argument.
// The function generates the Fibonacci sequence of length 5, which is [0, 1, 1, 2, 3, 5], and returns the resulting array.
// The array [0, 1, 1, 2, 3, 5] is then printed to the console.

//In summary, the code uses a loop to generate a Fibonacci sequence of a specified length by adding the previous two numbers in the sequence.
// The resulting sequence is stored in an array and returned as the output.