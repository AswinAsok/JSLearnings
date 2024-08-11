class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
}

LinkedList.prototype.insertAtBeginning = function (data) {
    const newNode = new Node(data);
    if (!this.head) {
        this.head = newNode;
    } else {
        newNode.next = this.head;
        this.head = newNode;
    }
};

LinkedList.prototype.insertAtEnd = function (data) {
    const newNode = new Node(data);
    if (!this.head) {
        this.head = newNode;
    } else {
        let last = this.head;
        while (last.next) {
            last = last.next;
        }

        last.next = newNode;
    }
};

LinkedList.prototype.insertAfterNode = function (data, prevNode) {
    const newNode = new Node(data, prevNode.next);
    prevNode.next = newNode;
};

LinkedList.prototype.deleteFirstNode = function () {
    if (!this.head) {
        return;
    }
    this.head = this.head.next;
};

LinkedList.prototype.deleteLastNode = function () {
    if (!this.head) {
        return;
    }

    if (!this.head.next) {
        this.head = null;
        return;
    }

    let last = this.head;

    while (last.next.next) {
        last = last.next;
    }

    last.next = null;
};

LinkedList.prototype.deleteGivenNode = function (data) {
    if (!this.head) return;

    if (this.head.data === data) {
        this.head = this.head.next;
    }

    let current = this.head;

    while (current.next !== null) {
        if (current.next.data === key) {
            current.next = current.next.next;
            return;
        }

        current = current.next;
    }
};

LinkedList.prototype.search = function (key) {
    let current = this.head;
    while (current) {
        if (current.next.data === key) return true;

        current = current.next;

        return false;
    }
};

LinkedList.prototype.printList = function () {
    let printArray = [];

    let current = this.head;
    while (current) {
        printArray.push(current.data);
        current = current.next;
    }

    console.log(printArray.join(" -> "));
};
