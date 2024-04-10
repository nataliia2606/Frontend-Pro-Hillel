let input = prompt("Введіть ціле число");

while (!Number.isInteger(parseInt(input))) {
    input = prompt("Невірний ввод! Будь ласка, введіть ціле число");
}

let number = parseInt(input);

let primeNumber = true;
if (number <= 1) {
    primeNumber = false;
} else {
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            primeNumber = false;
            break;
        }
    }
}

if (primeNumber) {
    console.log(`${number} є простим числом.`);
} else {
    console.log(`${number} не є простим числом.`);
}
