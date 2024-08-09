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
    newNode.next = this.head;
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

//delete a speicific node
LinkedList.prototype.deleteByKey = function (key) {
    //if list is empty
    if (!this.head) {
        return;
    } else if (this.head.data === key) {
        this.head = this.head.next;
        return;
    } else {
        let current = this.head;

        while (current.next) {
            if (current.next.data === key) {
                current.next = current.next.next;
                return;
            }

            current = current.next;
        }
    }
};

LinkedList.prototype.search = function (key) {
    let current = this.head;

    while (current) {
        if (current.data == key) {
            return true;
        }
    }

    return false;
};

LinkedList.prototype.printList = function () {
    let current = this.head;

    let listValues = [];

    while (current) {
        listValues.push(current.data);
        current = current.next;
    }

    console.log(listValues);
};
