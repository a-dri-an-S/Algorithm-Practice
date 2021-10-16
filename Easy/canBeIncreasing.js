// Given a 0-indexed integer array nums, return true if it can be made strictly increasing after removing exactly one element, or false otherwise. If the array is already strictly increasing, return true.
// The array nums is strictly increasing if nums[i - 1] < nums[i] for each index (1 <= i < nums.length).

const canBeIncreasing = function(nums) {
    let ans = false;
        
    for (let i = 0; i < nums.length; i++) {
        const arr = nums.slice(0, i).concat(nums.slice(i + 1))
        if (arr.length === 1) return true
        
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] < arr[j + 1]) {
                ans = true;
            } else if (arr[j] >= arr[j + 1]) {
                ans = false;
                break;
            }
        }
        if (ans) {
            break;
        }
    }
    return ans;
};

// 1. Declare ans and set it to false
// 2. Use for loop to iterate through nums array
// 3. Declare arr array and set it to an array w/ element at current index removed
//  - Slice nums at index-0 to index-i and concat to nums sliced at index i + 1 to end of nums array
// 4. If current arr's length is equal to 1 (contains 1 element) return true
// 5. Use nested for loop to iterate through current arr
// 6. If current integer at index-i is less than integer at index-i+1, set ans to true
// 7. Else if, current integer at index-i is greater than or equal to integer at index-i+1, set ans to false and break
// 8. If ans is equal to true., break loop
// 9. Return ans