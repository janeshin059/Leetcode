class Stack {
  constructor(){
    this.items = [];
    this.count = 0;
  }

  // Add element to top of stack
  push(element) {
    this.items[this.count] = element;
    console.log(`${element} added to ${this.count}`);
    this.count += 1;
  
    return this.count - 1; //position
  }

  // Return and remove top element in stack
  // Return undefined if stack is empty
  pop() {
    if(this.count == 0) return undefined;
    let deleteItem = this.items[this.count - 1];
    this.count -= 1;
    console.log(`${deleteItem} removed`);
    return deleteItem;
  }

  // Check the top element in stack
  peek() {
    console.log(`top element is ${this.items[this.count -1]}`)
    return this.items[this.count - 1];
  }

  // Check if stack is empty
  isEmpty() {
    console.log(this.count == 0 ? `Stack is empty` : `Stack is not empty`);
    return this.count == 0;
  }

  //Check the size of stack
  size(){
    console.log(`${this.count} elements in stack`);
    return this.count;
  }
  
  // Print elements in stack
  print() {
    for(let i = 0;i<this.count;i++){
      console.log(this.items[i]);
    }
  }

  // Clear stack
  clear() {
    this.items = [];
    this.count = 0;
    console.log('Stack cleared');
    return this.items;
  }

}

const stack = new Stack();

stack.isEmpty();

stack.push(200);
stack.push(100);

//stack.pop();
//stack.pop();
//stack.pop();

stack.size();

stack.clear();
