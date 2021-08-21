// A newly designed keypad was tested, where a tester pressed a sequence of n keys, one at a time.
// You are given a string keysPressed of length n, where keysPressed[i] was the ith key pressed in the testing sequence, and a sorted list releaseTimes, where releaseTimes[i] was the time the ith key was released. Both arrays are 0-indexed. The 0th key was pressed at the time 0, and every subsequent key was pressed at the exact time the previous key was released.
// The tester wants to know the key of the keypress that had the longest duration. The ith keypress had a duration of releaseTimes[i] - releaseTimes[i - 1], and the 0th keypress had a duration of releaseTimes[0].
// Note that the same key could have been pressed multiple times during the test, and these multiple presses of the same key may not have had the same duration.
// Return the key of the keypress that had the longest duration. If there are multiple such keypresses, return the lexicographically largest key of the keypresses.

const slowestKey = (releaseTimes, keysPressed) => {
    let counts = [];
    
    for (let i = 0; i < releaseTimes.length; i++) {
        if (i === 0) {
            counts.push([keysPressed[i], releaseTimes[i]])
        } else {
            counts.push([keysPressed[i], releaseTimes[i] - releaseTimes[i - 1]]) 
        }
    }
    
    counts.sort((a, b) => b[1] - a[1]);
    const filtered = counts.filter(arr => arr[1] === counts[0][1]).sort().reverse();
    
    return filtered[0][0];
};

// 1. Declare count and set it to an empty array
// 2. Use for loop to iterate through releaseTimes array
// 3. If at 0 index, push array of current [keyPressed, releaseTimes] into counts array
// 4. Else, push array of current [keyPressed, releaseTimes - previous releaseTimes] into counts array
// 5. Sort the nums in subarrays of counts array in descending order
// 6. Declare filtered and set it to an array of longest key presses, via filter(), sorted in alphabetical order via sort(), then reversed via reverse()
// 7. Return filtered at index 0, 0 to return slowest key with highest value