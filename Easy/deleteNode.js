// Write a function to delete a node in a singly-linked list. You will not be given access to the head of the list, instead you will be given access to the node to be deleted directly.
// It is guaranteed that the node to be deleted is not a tail node in the list.

const deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
};

// 1. Let value of node being removed equal to the value of the next node in the list
// 2. Let the pointer of node being removed equal to pointer of the next node in the list