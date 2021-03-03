var hasCycle = function(head){
  let fastPointer = head;
  let slowPointer = head;

  //while loop will continue until the fast pointer reaches the end of the linked list
 
  while (fastPointer !== null && fastPointer.next !== null){
    fastPointer = fastPointer.next.next;
    slowPointer = slowPointer.next;
    //if they were met, it means there is a cycle
    if(fastPointer == slowPointer){
      return true;
    }
  }
  return false;
}

// time O(n) : traverse the linked list
//space O(1) 