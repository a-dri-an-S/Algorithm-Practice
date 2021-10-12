// There is a hidden integer array arr that consists of n non-negative integers.
// It was encoded into another integer array encoded of length n - 1, such that encoded[i] = arr[i] XOR arr[i + 1]. For example, if arr = [1,0,2,1], then encoded = [1,2,3].
// You are given the encoded array. You are also given an integer first, that is the first element of arr, i.e. arr[0].
// Return the original array arr. It can be proved that the answer exists and is unique.

const decode = function(encoded, first) {
    const newArr = [first];
    
    for (const i in encoded) {
        newArr.push(newArr[i] ^ encoded[i]);
    }
    return newArr;
};

// 1. Declare newArr and ste it an array with a value of first at the 0-index
// 2. Use for loop to iterate through encoded array
// 3. Find the XOR between current value in newArr and encoded arrays and push value into newArr via push() method
// 4. Return newArr