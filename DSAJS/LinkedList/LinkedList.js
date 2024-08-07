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

//Insert at the start
LinkedList.prototype.insertAtBeginning = function (data) {
    const newNode = new Node(data);
    this.head = newNode;
};

//Insert at the end
LinkedList.prototype.insertAtEnd = function (data) {
    const newNode = new Node(data);
    if (!this.head) {
        this.head = newNode;
        return;
    } else {
        let last = this.head;
        while (last.next) {
            last = last.next;
        }

        last.next = newNode;
    }
};

//Insert at a given point
LinkedList.prototype.insertAfter = function (prevNode, data) {
    if (!prevNode) {
        console.log("The given prev node cannot be null");
    } else {
        const newNode = new Node(data, prevNode.next);
        prevNode.next = newNode;
    }
};

// delete the first node
LinkedList.prototype.deleteFirstNode = function () {
    if (!this.head) {
        return;
    }
    this.head = this.head.next;
};

//delete the last node
LinkedList.prototype.deleteLastNode = function () {
    if (!this.head) {
        return;
    } else if (!this.head.next) {
        this.head = null; //if there is only one node.
        return;
    } else {
        let secondLast = head;

        while (secondLast.next.next) {
            secondLast = secondLast.next;
        }

        secondLast.next = null;
    }
};
