// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

const deleteDuplicates = function(head) {
    let currNode = head;
    
    while (currNode && currNode.next) {
        if (currNode.val === currNode.next.val) {
            currNode.next = currNode.next.next;
        } else {
            currNode = currNode.next;  
        }
    }
    
    return head;
};

// 1. Declare currNode and set it to head
// 2. Use while loop to loop while currNode & currNode.next are both truthy (not equal to null)
//  - If currNode.val (node value) is equal to currNode.next.val (next node value), set currNode.next equal to currNode.next.next (current node pointer equal to the pointer of the next node in list, skip over duplicate)
//  - Else, set currNode equal to currNode.next (move to next node in list)
// - End loop
// 3. Return head