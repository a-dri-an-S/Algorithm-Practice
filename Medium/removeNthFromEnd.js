// Given the head of a linked list, remove the nth node from the end of the list and return its head.

const removeNthFromEnd = function(head, n) {
    let current = head;
    let count = 0;
    
    while (current !== null) {
        current = current.next;
        count++;
    }
    count -= n;
    current = head;
    
    if (count === 0) return head.next;
    while (count > 1) {
        current = current.next;
        count--;
    }
    
    current.next = current.next.next;
    return head;
};

// 1. Declare current and set it to head
// 2. Declare count and set it to 0
// 3. Use while loop to loop until current is equal to null. While looping, perform the following:
//  - Set current equal to current.next (next node in list)
//  - Increment count by 1
// 4. Set count equal to count - n
// 5. Set current equal to head
// 6. If count is equal to 0, return head.next
// 7. Use while loop to loop until count is less than 1. While looping, perform the following:
//  - Set current equal to current.next (next node in list) 
//  - Decrement count by 1
// 8. Set current.next equal to current.next.next (Set pointer of current node equal to pointer of node two places over)
// 9. Return head