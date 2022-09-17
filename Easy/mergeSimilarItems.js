// You are given two 2D integer arrays, items1 and items2, representing two sets of items. Each array items has the following properties:

//     items[i] = [valuei, weighti] where valuei represents the value and weighti represents the weight of the ith item.
//     The value of each item in items is unique.

// Return a 2D integer array ret where ret[i] = [valuei, weighti], with weighti being the sum of weights of all items with value valuei.

// Note: ret should be returned in ascending order by value.

const mergeSimilarItems = function(items1, items2) {
    let hash = new Map();
    
    for (let arr of [...items1, ...items2]) {
        if (hash.has(arr[0])) {
            hash.set(arr[0], hash.get(arr[0]) + arr[1]);
        } else {
            hash.set(arr[0], arr[1]);
        }
    }
    
    return [...hash].sort((a, b) => a[0] - b[0]);
};

// 1. Declare hash and set it to an empty Map object
// 2. Use a for loop to iterate through both items1 and items2
//  - Use the spread operator to "unpack" both items1 and items2 into an empty array
// 3. IF hash has element at index 0 of current sub array (arr), add element at index 1 of current arr to value of key/value pair
//  - Use the .has() method to check if the map object contains element at index-0 of current arr
//  - Use the .set() method to update the value of element at index-0 of current arr
//  - Use the .get() method to get the value of element at index-0 of current arr and add it to element at index-1 of current arr
// 4. ELSE, set the key/value pair with key as element at index-0 and value as element at index-1 of current arr
//  - Use the .set() method to add the key/value pair to map object
// 5. Return the map object unpacked into an empty array, in ascending order by index-0 of subarrays
//  - Use the spread operator and unpack the map object (hash) into an empty array
//  - Use the .sort() method to sort the array into ascending order