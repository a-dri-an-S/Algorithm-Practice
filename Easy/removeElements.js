// Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

const removeElements = function(head, val) {
    let node = head;
    let prev = null;
    
    while (node) {
        if (node.val === val) {
            if (prev === null) {
                head = node.next;
            } else {
                prev.next = node.next;
            }
        } else {
            prev = node;
        }
        node = node.next;
    }
    
    return head;
};

// 1. Declare node and set it to head (head of linked list)
// 2. Declare prev and set it to null
// 3. Use while loop to create loop until end of linked list is reached (node is equal to null)
//  - if current node value (node.val) is equal to val, perform the following:
//      - If prev is equal to null, set head equal to next node in list (move head over by one node)
//      - Else, set next node of prev equal to next node of node (move up one node in prev list)
//  - Else, set prev equal to node
//  - After conditional statement, set node equal to next node on the list (moving up one node in list)
// 4. When loop ends, return head