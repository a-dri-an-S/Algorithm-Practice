// We have two special characters:
//     The first character can be represented by one bit 0.
//     The second character can be represented by two bits (10 or 11).
// Given a binary array bits that ends with 0, return true if the last character must be a one-bit character.

const isOneBitCharacter = function(bits) {
    for (let i = 0; i < bits.length; i++) {
        if (i === bits.length - 1) return true;
        if (bits[i] === 1 && i !== bits.length - 1) {
            i++;
        }
    }
    
    return false;
};

// 1. Use a for loop to iterate through bits array
// 2. If current position is the last index, return true
//  - Use the length property and subtract by 1 to get the last index of bits array
// 3. If current bit at index-i is equal to 1 AND current-i is not the last index, increment i by 1
//  - Use the length property and subtract by 1 to get the last index of bits array
// 4. If conditions are not met in for loop. return false