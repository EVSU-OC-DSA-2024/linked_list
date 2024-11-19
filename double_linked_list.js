class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.size++;
  }

  unshift(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  splice(index, data) {
    const node = new Node(data);
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    node.prev = current;
    node.next = current.next;
    current.next = node;
    this.size++;
  }

  remove(data) {
    if (!this.head) {
      return;
    }
    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    while (current.next) {
      if (current.next.data === data) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
    this.size--;
  }

  pop() {
    if (!this.head) {
      return;
    }
    const data = this.tail.data;
    this.tail = this.tail.prev;
    this.tail.next = null;
    this.size--;
    return data;
  }

  shift() {
    if (!this.head) {
      return;
    }
    const data = this.head.data;
    this.head = this.head.next;
    this.head.prev = null;
    this.size--;
    return data;
  }

  print() {
    let current = this.head;
    let values = [];
    while (current) {
      values.push(current.data);
      current = current.next;
    }
    return values.join(' -> ');
  }

  search(data) {
    let current = this.head;
    while (current) {
      if (current.data === data) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  size() {
    return this.size;
  }

  isEmpty() {
    return this.head === null;
  }
}