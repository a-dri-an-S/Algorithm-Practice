// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

const maxArea = function(height) {
    let maxArea = 0;
    let i = 0;
    let j = height.length - 1;
    
    while (i < j) {
        const minSize = Math.min(height[j], height[i]);
        const length = j - i;
        maxArea = Math.max(maxArea, minSize * length);
        
        if (height[i] < height[j]) i++;
        else j--;
    }
    return maxArea;
};

// 1. Declare maxArea and set it to 0
// 2. Declare i and set it to 0
// 3. Declare j and set it to last index in height array
//  - Use length property to get count of elements in array and subtract by 1 (0-indexed array)
// 4. Use a while loop that runs while i is less than j (when both index is the same, loop will end)
// 5. Declare minSize and set it to the smaller integer between height[j] + height[i]
//  - Use the Math.min() function to obtain smaller integer between the two
// 6. Declare length and set it to j - i (length between both indices)
// 7. Set maxArea equal to the largest area between maxArea and current area
//  - Use Math.max() to get the largest area between the two
//  - Get current area by multiplying minSize and length
// 8. If height at index-1 is less than height at index-j, increment i by 1
// 9. Else, decrement j by 1
// 10. When loop ends, return maxArea