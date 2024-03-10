class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insertAtHead(data) {
    // Runs in constant time
    const newHeadNode = new Node(data, this.head);
    this.length++;
    this.head = newHeadNode;
  }

  getByIndex(index) {
    if (index < 0 || index >= this.length) return null;

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  insertAtIndex(index, value) {
    if (index === 0) return this.insertAtHead(value);
    
    const prevIndex = this.getByIndex(index - 1)
    if (prevIndex === null) return null

    prevIndex.next = new Node(value, prevIndex.next)
    this.length++;
  }

  removeHead() {
    this.head = this.head.next;
    this.length--;
  }

  removeAtIndex(index) {
    if (index === 0) return this.removeHead()
    
    const prevIndex = this.getByIndex(index - 1)
    if (prevIndex === null) return null

    prevIndex.next = prevIndex.next.next
    this.length--;
  }

  print() {
    let output = "";
    let current = this.head;
    while (current) {
      output = `${output}${current.value} -> `;
      current = current.next;
    }
    console.log(`${output}null`);
  }
}

LinkedList.fromValues = function (...values) {
  const ll = new LinkedList();

  for (let i = values.length - 1; i >= 0; i--) {
    ll.insertAtHead(values[i]);
  }

  return ll;
};

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

module.exports = LinkedList;
