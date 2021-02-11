//Implementing a queue using array

function Queue() {
  this.elements = [];
}

Queue.prototype.enqueue = function(e) {
  this.elements.push(e);
}

//remove the element from the front of the queue

Queue.prototype.dequeue = function() {
  return this.elements.shift();
}
// the 'shift()' method removes the 'first' element from an array and returns that removed element.
// this method changes the length of the array.

Queue.prototype.isEmpty = function() {
  return this.elements.length == 0;
}

Queue.prototype.peek = function() {
  return !this.isEmpty() ? this.elements[0] : undefined;
}

Queue.prototype.length = function() {
  return this.elements.length;
}

