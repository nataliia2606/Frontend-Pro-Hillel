const array = [{}, 1, 2, 3, 4, 5, 6, 'string', null];

function foo(array) {

    const filterArr = array.filter(item => typeof item === 'number' && !isNaN(item));
    if (filterArr.length === 0) {
        return 'the array was empty';
    }
    const sum = filterArr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const average = sum / filterArr.length;

    return average;
}

const result = foo(array);

console.log(result);