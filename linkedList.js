class Node {//data, pointer
  constructor(data, next = null){
    this.data = data;
    this.next = next;
  }

}

class LinkedList {
  constructor(){
    this.size = 0;
  }
  //insert first node
  insertFirst(data){
    this.head = new Node(data, this.head);
    this.size++;
  }

  //insert last node
  insertLast(data) {
    let node = new Node(data);
    let current;
    //If empty, make head
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

  //insert at index

  insertAt(data, index){

    // If index is out of range
   if(index > 0 && index > this.size) {
     return;
   }
   //If first index
   if(index === 0) {
     this.head = new Node(data, this.head);
     return;
   }

   const node = new Node(data);
   let current, previous;

   current = this.head;
   let count = 0;

   while(count < index) {
     previous = current;
     count++;
     current = current.next; // node after index. traverse the linked list

   }
   node.next = current;
   previous.next = node;
   this.size++;

  }

  //get at index
  getAt(index) {
    let current = this.head;
    let count = 0;

    while(current) {
     if(count == index){
       console.log(current.data);
     }
     count++;
     current = current.next;
    }
    return null;
  }

  //Remove at index
  removeAt(index) {
    if(index > 0 && index >= this.size){
      return;
    }
    let current = this.head;
    let previous;
    let count = 0;

    //Remove first
    if(index === 0){
      this.head = current.next;
    }
    else {
      while(count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }

    this.size--;
  }


  //Clear list
  clearList() {
    this.head = null;//no reference to next data
    this.size = 0;
  }




  //Print list data

  printListData(){
    let current = this.head;

    while(current) {
      console.log(current.data);
      current = current.next;
    }
   
  }


}

const ll = new LinkedList();
ll.insertFirst(100);
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertAt(500,2);

ll.clearList();

ll.removeAt(2);

//ll.printListData();
ll.getAt(2);
