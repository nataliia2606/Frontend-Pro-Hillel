let N = prompt("Введіть ціле число N");

while (!Number.isInteger(parseInt(N))) {
    N = prompt("Невірний ввод! Будь-ласка введіть ціле число ще раз");
}
N = parseInt(N);
console.log(`Цілі числа від 1 до 100, квадрат яких не перевищує ${N}:`);
for (let i = 1; i <= 100; i++) {
    if (i * i <= N) {
        console.log(i);
    } else {
        break;
    }
}
