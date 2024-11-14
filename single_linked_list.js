class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  push(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }

    this.size++;
  }

  unshift(data) {
    const node = new Node(data);
    node.next = this.head;
    this.head = node;
    this.size++;
  }

  splice(index, data) {
    const node = new Node(data);
    let current = this.head;

    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }

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

  print() {
    let current = this.head;

    let values = []
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