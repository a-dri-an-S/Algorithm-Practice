// Given two strings first and second, consider occurrences in some text of the form "first second third", where second comes immediately after first, and third comes immediately after second.
// Return an array of all the words third for each occurrence of "first second third".

const findOcurrences = function(text, first, second) {
    const words = [];
    const textArr = text.split(" ");
    
    for (let i = 0; i < textArr.length - 2; i++) {
        const pos1 = textArr[i];
        const pos2 = textArr[i + 1];
        const pos3 = textArr[i + 2];
        if (pos1 === first && pos2 === second) {
            words.push(pos3);
        }
    }
    return words;
};

// 1. Declare words and set it to an empty array
// 2. Declare textArr and set it to an array of sub-strings extracted from text
//  - Use split to split string "text" at the " " into an array of substrings
// 3. Use for loop to iterate through textArr array
// 4. Declare pos1 and set it to string at current index
// 5. Declare pos2 and set it to string up 1-index from pos1
// 6. Declare pos3 and set it to a string 2-indices from pos3
// 7. If pos1 is equal to first and pos2 is equal to second, push pos3 into words array
// 8. Return words array