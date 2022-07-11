// You are given the strings key and message, which represent a cipher key and a secret message, respectively. The steps to decode message are as follows:
//     Use the first appearance of all 26 lowercase English letters in key as the order of the substitution table.
//     Align the substitution table with the regular English alphabet.
//     Each letter in message is then substituted using the table.
//     Spaces ' ' are transformed to themselves.
//     For example, given key = "happy boy" (actual key would have at least one instance of each letter in the alphabet), we have the partial substitution table of ('h' -> 'a', 'a' -> 'b', 'p' -> 'c', 'y' -> 'd', 'b' -> 'e', 'o' -> 'f').

const decodeMessage = function(key, message) {
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    key = [...new Set(key)].filter(el => el !== " ");
    let secret = "";
    
    for (let i = 0; i < message.length; i++) {
        if (message[i] === " ") {
            secret += " ";
        } else {
            const index = key.indexOf(message[i]);
            secret += alphabet[index];        
        }
    }
    return secret;
};

// 1. Declare alphabet and set it to the alphabet (a-z) as individual characters in an array
// 2. Set key equal to itself with only unique characters and no spaces
//  - Use Set() object to remove all repeated characters and return unique characters
//  - Use the spread operator to unpack string into individual characters into an empty array
//  - Use the filter method to remove all instances of " "
// 3. Declare secret and set it to an empty string
// 4. Use a for loop to iterate through message
// 5. Is current character in string is EQUAL TO AN empty space (" "), concat an empty space to secret
// 6. Else, perform the following:
// 7. Declare index and set it to index that current character at message[i] is in key array
//  - Use the idexOf() method to check if message[i] is in key and return that index
// 8. Get character of alphabet at value index and concat to secret
// 9. When loop ends, return secret
