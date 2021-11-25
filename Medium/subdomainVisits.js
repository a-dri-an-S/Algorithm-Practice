// A website domain "discuss.leetcode.com" consists of various subdomains. At the top level, we have "com", at the next level, we have "leetcode.com" and at the lowest level, "discuss.leetcode.com". When we visit a domain like "discuss.leetcode.com", we will also visit the parent domains "leetcode.com" and "com" implicitly.
// A count-paired domain is a domain that has one of the two formats "rep d1.d2.d3" or "rep d1.d2" where rep is the number of visits to the domain and d1.d2.d3 is the domain itself.
// For example, "9001 discuss.leetcode.com" is a count-paired domain that indicates that discuss.leetcode.com was visited 9001 times.
// Given an array of count-paired domains cpdomains, return an array of the count-paired domains of each subdomain in the input. You may return the answer in any order.

const subdomainVisits = function(cpdomains) {
    let hash = new Map();
    let cpsbdomains = [];
    
    for (let i = 0; i < cpdomains.length; i++) {
        const arr = cpdomains[i].split(/[ .]+/);
        const count = Number(arr.splice(0, 1));
        const lastIdx = arr.length - 1;
        
        for (let j = lastIdx; j >= 0; j--) {
            let sub;
            if (j === lastIdx) sub = arr[j]
            else sub = arr.slice(j).join('.');
            
            if (hash.has(sub)) hash.set(sub, hash.get(sub) + count)
            else hash.set(sub, count);
            
        }
    }
    
    for (const arr of hash) {
        const cpsbdomain = [arr[1], arr[0]].join(" ");
        cpsbdomains.push(cpsbdomain);
    }
    
    return cpsbdomains;
};

// 1. Declare hash and set it to an empty map object
// 2. Declare cpsbdomains and set it to an empty array
// 3. Use for loop to iterate through cpdomains array (index-i)
//  - Declare arr and set it to an array of substrings extracted from current value in cpdomains array
//      - Use split() method to split string into substrings
//      - Use regex to split string at both the white space (" ") and the "."
//  - Declare count and set it to the number found at index-0 of arr (previously split string)
//      - Use splice() method to remove the first string found at index-0
//      - Use Number() function to convert string to number
//  - Declare lastIdx and set it to the last index of arr array
//  - End Loop
// 4. Use a nested for loop and iterate through arr array in reverse, starting at last index and decrementing by 1  (index-j)
//  - Declare sub
//  - If, current index-j is equal to lastIdx, set sub equal to value at last index of array
//  - Else, set sub equal to arr sliced at j-index and join with a "." between each value
//      - Use slice() method to get sub array from arr starting at current index-j to end of array
//      - Use join() method to join the values in sliced array with a "." in between each value
//  - If hash object has (contains) current sub, add count to its value
//      - Use has() method to check is map object contains sub
//      - Use set() method to set the key/value pair in the hash map object
//      - Use get() method to get value of key in hash map object and add count to its value
//  - Else, set sub in hash with its key/value pair (key set to sub and value set to count)
//  - End Loop
// 5. Use for loop to iterate through hash map object
//  - Declare cpsbdomain and set it to an array with value in the 0-index position and key in the 1-index position, and join with whitespace in between
//      - Use join() method to join the array into a string
//  - Append cpsbdomain to cpsbdomains array with push() method
//  - End Loop
// 6. Return cpsbdomains