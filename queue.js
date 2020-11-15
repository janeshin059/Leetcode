class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  isEmpty() {
    return !this.front;
  }

  enqueue(value) {
    console.log('ENQUE', value);
    //Create a new node with value
    let node = new Node(value);

    //if queue is empty
    if (this.isEmpty()) {

    //point front and back to new node
      this.front = node;
      this.back = node;
    }

     //else the queue is not empty
    else {
      //push node to the back of the queue
      //by pointing the last node to the newly created node
      this.back.next = node;

    //move back pointer to new node
    this.back = node;
    }
    this.print();
  }

  print() {
    // If the queue is empty
    if(this.isEmpty()) {
      console.log('EMPTY QUEUE');
    }
    else {
       // Else it's not empty
       let tempArr = [];
       let tmp = this.front;

       while(tmp) {
         tempArr.push(tmp.value);
         tmp = tmp.next;
       }
    }

    // print the values
    console.log(tmpArr.join(','));

  }

  dequeue() {
    // pointer to front of the queue
    let node = this.front;

    // if queue is not empty
    if (!this.isEmpty()) {
     //move front to the next element
     this.front = this.front.next;
    }

    //check if front is null / past the end of the queue
    if(!this.front){
    //set back to null
    this.back = null;
    }

    //print
    this.print();
    //return node at the front of the queue
    return node;

  }




}

let q = new Queue();

q.enqueue(1);
q.enqueue(2);
