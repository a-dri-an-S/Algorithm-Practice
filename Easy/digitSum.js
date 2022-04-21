// You are given a string s consisting of digits and an integer k.
// A round can be completed if the length of s is greater than k. In one round, do the following:
//     Divide s into consecutive groups of size k such that the first k characters are in the first group, the next k characters are in the second group, and so on. Note that the size of the last group can be smaller than k.
//     Replace each group of s with a string representing the sum of all its digits. For example, "346" is replaced with "13" because 3 + 4 + 6 = 13.
//     Merge consecutive groups together to form a new string. If the length of the string is greater than k, repeat from step 1.
// Return s after all rounds have been completed.

const digitSum = function(s, k) {
    let sums = [];
    
    while (s.length > k) {
        for (let i = 0; i < s.length; i += k) {
            const str = s.substr(i, k);
            const sum = str.split("").reduce((a, b) => +a + +b, 0);
            sums.push(sum.toString());
            
        }
        s = sums.join("")
        sums = [];
    }
    
    return s;
};

// 1. Declare sum and set it to an empty array
// 2. Use a while loop to loop until length of s is less than or equal to k
// 3. Use a for loop to iterate through s, incrementing in k steps
// 4. Declare str and set it to a substring of s at current index-i and length of k
//  - Use substr() method to get the substring starting at index-i, with length of k
// 5. Declare sum and set it to sum of str after converted to an array
//  - Use split("") method to split string into individuals chars in an array
//  - Use reduce() method to sum all elements in the array
//  - Use the + in front of string convert to integer
// 6. Append sum converted back to string to sums array
//  - Use toString() to convert to string
// 7. Set s equal to sums joined back into a string
//  - Use join("") to combine elements in an array to a string
// 8. Set sums back to an empty array
// 9. When loops are done running, return s
