// A decimal number is called deci-binary if each of its digits is either 0 or 1 without any leading zeros. For example, 101 and 1100 are deci-binary, while 112 and 3001 are not.
// Given a string n that represents a positive decimal integer, return the minimum number of positive deci-binary numbers needed so that they sum up to n.

const minPartitions = n => {
    n = [...n];
    n.sort((a, b) => b - a);
    
    return n[0];
};

// 1. Set n equal to n destructed inside an empty array with spread syntax
// 2. Sort n in descending order with sort() method
// 3. Return value at index-0 of n array