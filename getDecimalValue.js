// Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.
// Return the decimal value of the number in the linked list.

const getDecimalValue = function(head) {
    let str = '';
    let curr = head;
    
    while (curr && curr.val !== null) {
        str += curr.val;
        curr = curr.next;
    }
    
    return parseInt(str, 2)
};

// 1. Declare str and set it to an empty string
// 2. Declare curr and set it to head 
// 3. Use while loop to traverse through linked list if curr (current head) and curr.val (current value of node/head) are not null
// 4. Set str equal to value of current head (curr.val)
// 5. Set curr equal to next pointer of current node (curr.next)
// 6. Place str with radix of 2 (radix 2 converts from binary to integer) in parseInt to return integer.