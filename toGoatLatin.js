// You are given a string sentence that consist of words separated by spaces. Each word consists of lowercase and uppercase letters only.
// We would like to convert the sentence to "Goat Latin" (a made-up language similar to Pig Latin.) The rules of Goat Latin are as follows:
//     If a word begins with a vowel ('a', 'e', 'i', 'o', or 'u'), append "ma" to the end of the word.
//         For example, the word "apple" becomes "applema".
//     If a word begins with a consonant (i.e., not a vowel), remove the first letter and append it to the end, then add "ma".
//         For example, the word "goat" becomes "oatgma".
//     Add one letter 'a' to the end of each word per its word index in the sentence, starting with 1.
//         For example, the first word gets "a" added to the end, the second word gets "aa" added to the end, and so on.
// Return the final sentence representing the conversion from sentence to Goat Latin.

const toGoatLatin = sentence => {
    const stringSplit = sentence.split(" ");
    const vowels = ["a", "e", "i", "o", "u"];
    let goatArr = [];
    let i = 2;

    for (let string of stringSplit) {
        let aa = Array(i).fill("a").join("");

        if (string.length === 1 || vowels.includes(string[0].toLowerCase())) {
            goatArr.push(string + "m" + aa)
        } else {
            let arr = string.split("");
            arr.push(arr.shift());
            goatArr.push(arr.join("") + "m" + aa)
        }
        i++
    }
    return goatArr.join(" ")
};

// 1. Declare stringSplit and set to sentence split by space into array of strings
// 2. Declare vowels and set it to array of lower case vowels
// 3. Declare goatArr and set it to an empty array
// 4. Declare i and set it to 2
// 5. Use for loop to iterate through stringSplit
// 6. Declare aa and set it to array of "a"'s at i length and join into string
// 7. Push string + m + aa if one of two conditions is met
//  - If string.length is equal to 1, single character 
//  - OR, if first letter of string is a vowel
// 8. ELSE, Declare arr and set it to string split into array of chars
// 9. Push first letter by shifting at index 0
// 10. Push (arr joined to string, concatenated to m to aa) into goatArr
// 11. Increment i by 1 for the next iteration
// 12. return goatArr joined back to string with spaces between each word