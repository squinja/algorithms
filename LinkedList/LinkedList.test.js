const LinkedList = require("./LinkedList");

describe("#insertAtHead", () => {
  test("it adds the element to the beginning of the list", () => {
    const testLinkedList = new LinkedList();

    testLinkedList.insertAtHead(20);
    const oldHead = testLinkedList.head;
    testLinkedList.insertAtHead(21);

    expect(testLinkedList.head.next).toBe(oldHead);
    expect(testLinkedList.head.value).toBe(21);
    expect(testLinkedList.length).toBe(2);
  });
});

describe("#getByIndex", () => {
  describe("with index less than 0", () => {
    test("it returns null", () => {
      const ll = LinkedList.fromValues(12, 15);

      expect(ll.getByIndex(-1)).toBeNull();
    });
  });
  describe("with index greater than list length", () => {
    test("it also returns null", () => {
      const ll = LinkedList.fromValues(12, 15);

      expect(ll.getByIndex(20)).toBeNull();
    });
  });
  describe("with index 0", () => {
    test("it returns the head", () => {
      const ll = LinkedList.fromValues(12, 15);

      expect(ll.getByIndex(0).value).toBe(12);
    });
  });
  describe("with index in middle of list", () => {
    test("it returns the value of that index", () => {
      const ll = LinkedList.fromValues(12, 16, 18, 19, 15);

      expect(ll.getByIndex(3).value).toBe(19);
    });
  });
});

describe("#insertAtIndex", () => {
  describe("with index less than 0", () => {
    test("it doesn't insert anything", () => {
      const ll = LinkedList.fromValues(12, 15);
      ll.insertAtIndex(-1, 30);

      expect(ll.length).toBe(2);
    });
  });
  describe("with index greater than the list length", () => {
    test("it doesn't insert anything", () => {
      const ll = LinkedList.fromValues(12, 15);
      ll.insertAtIndex(5, 20);

      expect(ll.length).toBe(2);
    });
  });
  describe("with index 0", () => {
    test("inserts element at head", () => {
      const ll = LinkedList.fromValues(12, 15);
      ll.insertAtIndex(0, 30);

      expect(ll.head.value).toBe(30);
      expect(ll.head.next.value).toBe(12);
      expect(ll.length).toBe(3);
    });
  });
  describe("with index in middle of list", () => {
    test("inserts element at given index", () => {
      const ll = LinkedList.fromValues(12, 15, 16, 18);
      ll.insertAtIndex(2, 50);
      const node = ll.getByIndex(2);

      expect(node.value).toBe(50);
      expect(node.next.value).toBe(16);
      expect(ll.length).toBe(5);
    });
  });
});

describe("#removeHead", () => {
  test("removes the head", () => {
    const ll = LinkedList.fromValues(10, 20, 30);
    ll.removeHead();

    expect(ll.head.value).toBe(20);
    expect(ll.head.next.value).toBe(30);
    expect(ll.length).toBe(2);
  });
});

describe("#removeAtIndex", () => {
  describe("with index less than 0", () => {
    test("nothing is removed", () => {
      const ll = LinkedList.fromValues(12, 15, 18);
      ll.removeAtIndex(-1);

      expect(ll.length).toBe(3);
    });
  });
  describe("with index greater than list length", () => {
    test("nothing is removed", () => {
      const ll = LinkedList.fromValues(12, 15, 18);
      ll.removeAtIndex(8);

      expect(ll.length).toBe(3);
    });
  });
  describe("with index greater than list length", () => {
    test("remove index 0", () => {
      const ll = LinkedList.fromValues(12, 15, 18);
      ll.removeAtIndex(0);

      expect(ll.length).toBe(2);
      expect(ll.head.value).toBe(15);
    });
  });
  describe("with index greater than list length", () => {
    test("remove index  in middle of list", () => {
      const ll = LinkedList.fromValues(12, 15, 18);
      ll.removeAtIndex(1);

      expect(ll.length).toBe(2);
      expect(ll.head.value).toBe(12);
      expect(ll.head.next.value).toBe(18);
    });
  });
});
