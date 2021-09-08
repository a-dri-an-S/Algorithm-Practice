// Given a string s, reverse only all the vowels in the string and return it.
// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both cases.

const reverseVowels = (s) => {
    let sArr = s.split('')
    let vowels = ['a','e','i','o','u', 'A','E','I','O','U'];
    let vowelArr = sArr.filter(el => vowels.includes(el)).reverse()
    
    for (let i = 0; i < sArr.length; i++) {
        if (vowels.includes(sArr[i])) {
            sArr.splice(i, 1, ...vowelArr.splice(0, 1))
        }
    }
   
    return sArr.join("")
    
};

// 1. Declare sArr and set it to an array of chars via split() method
// 2. Declare vowels and set it to an array of vowels in both lower and uppercase letters
// 3. Declare vowelArr and set it to an array of vowels from string s in reverse
//  - Use sArr (split array) and fitler method to extract vowels from s string
//  - Use reverse method to reverse array of vowels
// 4. Use for loop to itereate through sArr array
// 5. If current char in sArr is a vowel (included inside of vowels array), remove char at current index and add vowel from reversed vowelArr
// 6. Return sArr joined back into string