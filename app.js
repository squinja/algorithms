const LinkedList = require("./LinkedList/LinkedList");
const BinarySearch = require("./BinarySearch/BinarySearch");
const mergeSort = require('./MergeSort/MergeSort')

// const ll = LinkedList.fromValues(12, 16, 18, 19, 15)

// ll.print()
// ll.insertAtIndex(2,100)
// ll.print()

// const list = new BinarySearch([2, 14, 22, 25, 31, 39, 41]);

// list.findValue(22);

const list = [25, 14, 232, 25, 31, 319, 11];

const sortedList = mergeSort(list)

console.log('sorted list',sortedList)
