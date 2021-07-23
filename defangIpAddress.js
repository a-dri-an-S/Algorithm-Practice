// Given a valid (IPv4) IP address, return a defanged version of that IP address.
// A defanged IP address replaces every period "." with "[.]".

const defangIPAddress = address => {
    return address.split("").map(val => val === '.' ? val = '[.]' : val).join("");
}

// 1. split string into array
// 2. map array and replace '.' w/ '[.]'
// 3. join array back to string

const defangIPAddress = address => address.replaceAll('.', '[.]');

// 1. use replaceAll string method to replace '.' with '[.]'