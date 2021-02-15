class Node{
  constructor(data, next = null){
    this.data = data;
    this.next = next;
  }
}
class LinkedList{
  constructor(){
    this.size = 0;
    this.head = null;
  }

  insertFirst(data){
    this.head = new Node(data, this.head);
    this.size++;
  }

  insertLast(data){
    let node = new Node(data);
    let current;

    if(!this.head){
      this.head = node;
    }
    else {
      current = this.head;
      while(current.next){
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  insertAt(data, index){
    let node = new Node(data);
    let previous;
    let current;
    let count = 0;
    if(index > 0 && index> this.size){
      return;
    }
    if(index == 0){
      this.head = new Node(data, this.head);
      return;
    }
    current = this.head;//initialize
    while(current < index){
      count++;
      previous = current;
      current = current.next;
    }
    node.next = current;
    previous.next = node;
    this.size++;

  }

  getAt(index){
    let count = 0;
    let current;
    current = this.head;
    
    while(current){
      if(count == index){
        console.log(current.data);
      }
      count++;
      current = current.next;
    }

    return null;
   
  }

  removeAt(index){
    if(index>0 && index >= this.size){
      return;
    }
    let previous;
    let current;
    let count = 0;
    current = this.head;
    while(count<index){
      count++;
      previous = current;
      current = current.next;
    }
    previous.next = current.next;
    this.size--;
    

   
   
  }

  clearList(){
    this.size = 0;
    this.head = null;
  }

  printList() {
    
    let current;
    current = this.head;
    if(index > 0 && index > this.size){
      return;
    }
    while(current){
      current = current.next;
      console.log(current.data)
    }
    
  }




}