/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  let newHead = new ListNode();
  let cur = newHead;
  let duplicate = 0;
  while(head){
      if(head.next && head.val == head.next.val){
          duplicate++;
      }else {
          if(duplicate == 0){
              cur.next = head;
              cur = cur.next;
          }
          duplicate = 0;
      }
      head = head.next;
  }
  cur.next = null;
  return newHead.next;  
};

//time complexity O(n)
//space O(1)