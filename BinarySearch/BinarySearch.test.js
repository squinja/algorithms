const BinarySearch = require("./BinarySearch");

describe("#addList", () => {
  test("it adds the list to the class property", () => {
    const myArr = [2, 14, 22, 25, 31, 39, 41]
    const list = new BinarySearch(myArr);

    const result = list.getList()

    expect(result[0]).toBe(myArr[0]);
    expect(result.at(-1)).toBe(myArr.at(-1));
  });
});

describe("#oddNumberList", () => {
  test("it is able to work on an odd number length array", () => {
    const myArr = [2, 14, 22, 25, 31, 39, 41]
    const list = new BinarySearch(myArr);

    const result = list.findValue(14)

    expect(result).toBe(1);
  });
});

describe("#evenNumberList", () => {
  test("it is able to work on an even number length array", () => {
    const myArr = [2, 14, 22, 25, 31, 39, 41, 52]
    const list = new BinarySearch(myArr);

    const result = list.findValue(52)

    expect(result).toBe(7);
  });
});

describe("#emptyList", () => {
  test("it returns -1 if the array is empty", () => {
    const myArr = []
    const list = new BinarySearch(myArr);

    const result = list.findValue(13)

    expect(result).toBe(-1);
  });
});