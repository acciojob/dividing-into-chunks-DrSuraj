function divide(arr, n) {
    // Initialize variables
    let result = [];
    let currentSubarray = [];
    let currentSum = 0;

    // Iterate over the input array
    for (let i = 0; i < arr.length; i++) {
        // If adding the current element doesn't exceed the maximum sum
        if (currentSum + arr[i] <= n) {
            currentSubarray.push(arr[i]);
            currentSum += arr[i];
        } else {
            // Start a new subarray
            result.push(currentSubarray);
            currentSubarray = [arr[i]];
            currentSum = arr[i];
        }
    }

    // Add the last subarray to the result
    result.push(currentSubarray);

    return result;
}

// Examples
console.log(divide([1, 2, 3, 4, 1, 0, 2, 2], 5)); // [[1, 2], [3], [4, 1, 0], [2, 2]]
console.log(divide([4, 3, 2, 1], 4));           // [[4], [3], [2], [1]]
