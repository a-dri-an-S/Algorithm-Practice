// A string s can be partitioned into groups of size k using the following procedure:

//     The first group consists of the first k characters of the string, the second group consists of the next k characters of the string, and so on. Each character can be a part of exactly one group.
//     For the last group, if the string does not have k characters remaining, a character fill is used to complete the group.

// Note that the partition is done so that after removing the fill character from the last group (if it exists) and concatenating all the groups in order, the resultant string should be s.

// Given the string s, the size of each group k and the character fill, return a string array denoting the composition of every group s has been divided into, using the above procedure

const divideString = function(s, k, fill) {
    const ans = [];
    
    while (s.length > 0) {
        let sub = s.substr(0, k);
        
        if (sub.length < k) {
            const diff = k - sub.length;
            let str = "";
            
            for (let i = 1; i <= diff; i++) {
                str += fill;
            } 
            
            sub = sub + str;
        }
        
        ans.push(sub);
        
        if (s.length < k) {
            s = ""
        } else {
            s = s.substr(k);
        }
    }
    
    return ans;
};

// 1. Declare and and set it to an empty array
// 2. Create while loop to loop until s is an empty string
// 3. Declare sub and set it to sub-string of s, starting at index-0 to index-k
//  - Use substr() method to get sub-string from s
// 4. If length of sub is less than k, perform the following:
//  - Declare diff and set it to the difference of k - sub length
//  - Declare str and set it to an empty string
//  - Use for loop to create a loop, iterating a total k times (start at 1 and increment by 1 until k is reached)
//      - In for loop, set str equal to itself + fill (adding 1 extra fill at each loop)
//  - Set sub equal to itself + str
// 5. Append sub to ans
//  - Use push() to append to end of array
// 6. If length of s is less than k, set s equal to an empty string
//  - Else, set s equal to substring starting at index-k
// 7. Return ans