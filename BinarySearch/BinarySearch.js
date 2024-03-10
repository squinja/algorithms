class BinarySearch {
    constructor(values) {
        this.values = values;
    }

    getList() {
        return this.values;
    }

    findValue(num) {
        let left = 0;
        let right = this.values.length - 1
        let midpoint;

        while (right >= 1) {
            midpoint = Math.floor((right - left) / 2) + left

            if (num === this.values[midpoint]) {
                console.log('Element is present at index ' + midpoint)
                return midpoint;
            }
    
            if (this.values[midpoint] > num) {
                right = midpoint - 1
            }

            if (this.values[midpoint] < num) {
                left = midpoint + 1
            }

        }

        console.log("Element is not present in array")
        return -1
    }
}


module.exports = BinarySearch;