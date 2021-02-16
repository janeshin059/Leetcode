function reverseList(head){
  let prev = null; // gonna be the new tail
  let next = null;

  while(head !== null){//reassign the node's next property to previous node
    //once head === null, we are done with the process of iterating the list
    next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev; //new head(last node)

}

//Recursive 

function reverseList2(head, prev = null){ 
  if(head == null) return prev;
  let next = head.next;
  head.next = prev;
  return reverseList(next,head);
}