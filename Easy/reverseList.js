// Given the head of a singly linked list, reverse the list, and return the reversed list.

const reverseList = function(head) {
    let currNode = head;
    let prevNode = null;
    let temp;
    
    while (currNode) {
        temp = currNode.next;
        currNode.next = prevNode;
        prevNode = currNode;
        currNode = temp;
    }
    
    return prevNode
};

// 1. Declare currNode and set it to head
// 2. Declare prevNode and set it to null
// 3. Declare temp
// 4. Use while loop to loop while currNode is truthy (currNode is not equal to null)
//  - Set temp equal to currNode.next (temporarily hold next node in linked list)
//  - Set currNode.next equal to prevNode (set currNode pointer to prevNode)
//  - Set prevNode equal to currNode (prevNode becomes currNode)
//  - Set currNode equal to temp (move up the list by 1 node w/ next node help within temp variable)
//  - When currNode is equal to null, end loop
// 5. Return prevNode (reversed linked list)