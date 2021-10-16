// Given a string paragraph and a string array of the banned words banned, return the most frequent word that is not banned. It is guaranteed there is at least one word that is not banned, and that the answer is unique.
// The words in paragraph are case-insensitive and the answer should be returned in lowercase.

const mostCommonWord = (paragraph, banned) => {
    const paraWords = paragraph.match(/(\w+)/g);
    const wordCount = {}
    
    for (let word of paraWords) {
        const lowercase = word.toLowerCase()
        if (banned.includes(lowercase)) {
            continue;
        } else if (wordCount[lowercase] === undefined){
            wordCount[lowercase] = 0
        }
        wordCount[lowercase]++
    }
    
    const counts = Object.entries(wordCount).sort((a, b) => b[1] - a[1])
    
    return counts[0][0]
};

// 1. Declare paraWords and set it to an array of words from "paragraph" string
// - Use match() + regex to extract words w/out special characters from paragraph string
// 2. Declare wordCount and set it to an empty object
// 3. Use for loop to iterate through paraWords array
// 4. Declare lowercase and set it to current word lower cased with toLowerCase() function
// 5. If lowercase is included in banned array (is a banned word), continue
// 6. Else if, current lowercase in wordCount object is undefined (doesn't exist), add it to object and set its value to 0
// 7. Increment value of current key in wordCount object by 1
// 8. Declare counts and set it to an array of subarray key value pairs, in descending order by value
//  - Use Object.entries() method to extract key value pairs as subArrays
//  - Use sort() method to sort array in descending order of values (index-1)
// 9. Return counts at index-0 of index-0 
//  - return most used word that is not a banned word