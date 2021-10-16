// Every valid email consists of a local name and a domain name, separated by the '@' sign. Besides lowercase letters, the email may contain one or more '.' or '+'.
//     For example, in "alice@leetcode.com", "alice" is the local name, and "leetcode.com" is the domain name.
// If you add periods '.' between some characters in the local name part of an email address, mail sent there will be forwarded to the same address without dots in the local name. Note that this rule does not apply to domain names.
//     For example, "alice.z@leetcode.com" and "alicez@leetcode.com" forward to the same email address.
// If you add a plus '+' in the local name, everything after the first plus sign will be ignored. This allows certain emails to be filtered. Note that this rule does not apply to domain names.
//     For example, "m.y+name@email.com" will be forwarded to "my@email.com".
// It is possible to use both of these rules at the same time.
// Given an array of strings emails where we send one email to each email[i], return the number of different addresses that actually receive mails.

const numUniqueEmails = emails => {
    let uniqueEmails = [];

    for (let email of emails) {
        let emailArr = [];
        let domain = email.split("@")
        emailArr.push([domain.pop()])

        for (let i = 0; i < domain.length; i++) {
            let arr = domain[i].split("+");
            if (arr.length > 1) {
                arr.pop();
            }
            emailArr[i].splice(0, 0, arr[i].replaceAll(".", "") + "@")
        }
        uniqueEmails.push(emailArr.join("").replace(",", ""))
    }
    return [...new Set(uniqueEmails)].length;
}

// 1. Declare uniqueEmails and set it to an empty array
// 2. Use for loop to iterate through emails array
// 3. Declare emailArr and set it to an empty array
// 4. Declare domain and set it to current email split at "@" into an array
// 5. Push end of current domain array into emailArr as a subarray
// 6. Use for loop to iterate through the current domain array
// 7. Declare arr and set it to current domain split at the "+" into array
// 8. If current arr length is greater than 1, delete last index of current arr, pop out of array
// 9. Splice current arr w/ "." removed from arr[i] via replaceAll concatenated to @, at index 0
// 10. Join emailArr into string with "," removed and pushed into uniqueEmails
// 11. Place uniqueEmails into new Set to return unique strings, spread into an array and return its length