// Given the head of a singly linked list, return the middle node of the linked list.
// If there are two middle nodes, return the second middle node.

const middleNode = function(head) {
    let middle = 0;
    let current = head;
    
    while (current.next !== null) {
        current = current.next;
        middle++
    }
    middle = Math.ceil(middle / 2);
    current = head;
    
    while (middle > 0) {
        current = current.next;
        middle--;
    }
    
    return current;
};

// 1. Declare middle and set it to 0
// 2. Declare current and set it to head
// 3. Use while loop to loop until current.next is equal null
//  - Set current equal to current.next (next node in list)
//  - Increment middle by 1
// 4. Set middle equal to middle divided by 2, rounded up
//  - Use Math.ceil() method to round up
// 5. Set current equal to head
// 6. Use while loop to loop until middle is less than or equal to 0
//  - Set current equal to current.next (next node in list)
//  - Decrement middle by 1
// 7. Return current