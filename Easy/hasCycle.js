// Given head, the head of a linked list, determine if the linked list has a cycle in it.
// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
// Return true if there is a cycle in the linked list. Otherwise, return false.

const hasCycle = function(head) {
    const set = new Set();
    
    let node = head;
    
    while (node) {
        if (set.has(node)) {
            return true;
        } else {
            set.add(node);
        }
        node = node.next;
    }
    return false;
};

// 1. Declare node and set it to head
// 2. Use while loop until node is a falsey value (null)
//  - If set has current node, return true
//      - Use has() method to check it set has node
//  - Else, add node to set with add() method
//  - Set node equal to node.next (next node in the list)
// 3. If loop ends and not cycle is found, return false