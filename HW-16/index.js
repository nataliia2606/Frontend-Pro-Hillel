function sum() {
    let total = 0;

    return function (number) {
        total += number;
        return total
    }
}

const calculateSum = sum()

console.log(calculateSum(4));
console.log(calculateSum(6));
console.log(calculateSum(10));
console.log(calculateSum(7));
