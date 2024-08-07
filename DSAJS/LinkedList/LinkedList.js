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
