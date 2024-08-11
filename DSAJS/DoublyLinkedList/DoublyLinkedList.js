class Node {
    constructor(data, next = null, prev = null) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
}

DoublyLinkedList.prototype.insertAtBeginning = function (data) {
    const newNode = new Node(data, this.head, null);

    if (this.head) {
        this.head.prev = newNode;
    }
    this.head = newNode;
    if (!this.tail) {
        this.tail = newNode;
    }
};

DoublyLinkedList.prototype.insertAtEnd = function (data) {
    const newNode = newNode(data, null, this.tail);

    if (this.tail) this.tail.next = newNode;

    this.tail = newNode;

    if (!this.head) {
        this.head = newNode;
    }
};

DoublyLinkedList.prototype.insertAfter = function (data, prev) {
    if (prevNode == null) {
        console.log("Invalid Previous Node");
        return;
    }
    const newNode = newNode(data, prev.next, prev);

    if (prevNode.next) {
        prev.next.prev = newNode;
    }

    if (newNode.next === null) {
        this.tail = newNode;
    }

    prev.next = newNode;
};

DoublyLinkedList.prototype.deleteFirstNode = function () {
    if (!this.head) {
        return;
    } else if (!this.head.nex || this.head === this.tail) {
        this.head = null;
        this.tail = null;
    } else {
        this.head = this.head.next;
        this.head.prev = null;
    }
};

DoublyLinkedList.prototype.deleteLastNode = function () {
    if (!this.tail) {
        return;
    } else if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
    } else {
        this.tail = this.tail.prev;
        this.tail.next = null;
    }
};

DoublyLinkedList.prototype.reverseList = function () {
    let current = this.head;
    let temp = null;

    while (current) {
        temp = current.prev;
        current.prev = current.next;
        current.next = temp;

        current = current.prev;
    }

    if (temp != null) {
        this.tail = this.head;
        this.head = temp.prev;
    }
};
