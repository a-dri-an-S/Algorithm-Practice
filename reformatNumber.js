// You are given a phone number as a string number. number consists of digits, spaces ' ', and/or dashes '-'.
// You would like to reformat the phone number in a certain manner. Firstly, remove all spaces and dashes. Then, group the digits from left to right into blocks of length 3 until there are 4 or fewer digits. The final digits are then grouped as follows:
//     2 digits: A single block of length 2.
//     3 digits: A single block of length 3.
//     4 digits: Two blocks of length 2 each.
// The blocks are then joined by dashes. Notice that the reformatting process should never produce any blocks of length 1 and produce at most two blocks of length 2.
// Return the phone number after formatting.

var reformatNumber = function(number) {
    let arr = []
    const nums = number.split("").filter(n => n !== " " && n !== "-")
    while (nums.length > 0) {
        if (nums.length === 7) {
            arr.push(nums.splice(0, 3), "-")
            arr.push(nums.splice(0, 2), "-")
        } else if (nums.length === 4) {
            arr.push(nums.splice(0, 2), "-")
            arr.push(nums.splice(0, 2))
        } else if (nums.length / 3 > 1){
            arr.push(nums.splice(0, 3), "-")
        } else if (nums.length === 3) {
            arr.push(nums.splice(0, 3))
        } else if (nums.length / 2 > 1) {
            arr.push(nums.splice(0, 2), "-")
        } else {
            arr.push(nums.splice(0, 2))
        }
    }
    return arr.flat().join("");
};

// 1. Declare arr and set it to an empty array
// 2. Declare nums and set it to an array of ONLY numbers
//  - Split number string into array of single chars
//  - Filter out the spaces " " and dashes "-"
// 3. Use while loop to loop until nums equal 0
// 4. If there are 7 nums in array, push first 3 numbers in nums via splice + "-" & next 2 numbers in nums via splice + "-"
// 5. If there are 4 nums in array, push first 2 numbers in nums via splice + "-" & next 2 numbers in nums via splice + "-"
// 6. If there are more than 3 nums in array, push first 3 numbers in nums via splice + "-"
// 7. If there are 3 nums in array, push last 3 numbers in nums via splice 
// 8. If there are more than 2 nums in array, push first 2 numbers in nums via splice + "-"
// 9. If there are 2 nums in array, push last 2 numbers in nums via splice 
// 10. Use flat method to remove arrays 1 depth inside of arr array and join into string
