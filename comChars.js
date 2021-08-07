// Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates). You may return the answer in any order.

const commonChars = words => {
    let comChars = [];

    for (let i = 0; i < words[0].length; i++) {
        let count = 1;
        
        for (let j = 1; j < words.length; j++) {
            if (words[j].includes(words[0][i])) {
                words[j] = words[j].replace(words[0][i], "")
                count++
            } 
        }
        if (count === words.length) {
            comChars.push(words[0][i])
        }
    }
    return comChars
}

// 1. Declare comChars and set it to an empty array
// 2. Use for loop to iterate through first word in words array, words[0]
// 3. Declare count and set it to 1
// 4. Use for loop to iterate through words array starting at index 1
// 5. If current word contain char at index i of words[0]
//  - Replace/remove char in string and set it equal to itself
//  - Increment count by 1
// 6. If current count is equal to words length (number of words in arr)
//  - Push current char to comChars array
// 7. Return comChars
