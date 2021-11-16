// Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

//  Definition for singly-linked list.
//  function ListNode(val, next) {
//       this.val = (val===undefined ? 0 : val)
//       this.next = (next===undefined ? null : next)
//  }

const mergeTwoLists = function(l1, l2) {
    let list = new ListNode();
    let head = list;
    
    while (l1 && l2) {
        if (l1.val < l2.val) {
            list.next = l1;            
            l1 = l1.next;
        } else {
            list.next = l2;            
            l2 = l2.next;
        }
        list = list.next;
    }
    
    if (l1) list.next = l1;
    if (l2) list.next = l2;
    
    head = head.next;
    
    return head;
};

// 1. Declare list and set it to an empty ListNode()
// 2. Declare head and set it to an empty list
// 3. Use while loop to create loop while both l1 and l2 are not equal to null and perform the following:
//  - If l1.val (current node value) is less than l2.val, perform the following:
//      - Set list.next (next node in list) equal to l1 list
//      - Set l1 equal to l1.next (move up 1 node in l1 list)
//  - Else
//      - Set list.next (next node in list) equal to l2 list
//      - Set l2 equal to l2.next (move up 1 node in l2 list)
//  - After conditional statement, set list equal to list.next (add new node to list)
//  - End Loop
// 4. If l1 is truthy (not equal to null) set list.next equal to l1 (add remainder of l1 to list)
// 5. If l2 is truthy (not equal to null) set list.next equal to l2 (add remainder of l2 to list)
// 6. Set head equal to head.next (first node has no value)
// 7. Return head
