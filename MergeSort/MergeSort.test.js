const mergeSort = require('./MergeSort')

describe('#oneIndexArray', () => {
    test('it returns the list if the array is 1 index long', () => {
        const result = mergeSort([1])
        expect(result[0]).toBe(1)
    })
})

describe('#sortArray', () => {
    test('it sorts an odd length array of random numbers successfully', () => {
        const result = mergeSort([1, 15, 89, 2, 14, 62, 2])
        expect(result[2]).toBe(2)
        expect(result[4]).toBe(15)
        expect(result.at(-1)).toBe(89)
    })
    test('it sorts an even length array of random numbers successfully', () => {
        const result = mergeSort([1, 15, 89, 2, 14, 62, 2, 3])
        expect(result[2]).toBe(2)
        expect(result[4]).toBe(14)
        expect(result.at(-1)).toBe(89)
    })
})
