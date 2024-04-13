const message = prompt('Enter yor string');
const chars = prompt('Enter some chars for removing');

function foo(string, arr) {
    const stringArr = string.split('');
    const filterArr = stringArr.filter(char => !arr.includes(char))

    return filterArr.join('')
}

const result = foo(message, chars);

alert(result);