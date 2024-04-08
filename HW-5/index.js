let number = prompt("Please enter a three-digit number");

if (!isNaN(number) && number.length === 3) {
    number = parseInt(number);
    let allNumberSame = number % 10 === Math.floor(number / 10) % 10 && number % 10 === Math.floor(number / 100);

    let hasRepeatedNumber = (number % 10 === Math.floor(number / 10) % 10) || (number % 10 === Math.floor(number / 100)) || (Math.floor(number / 10) % 10 === Math.floor(number / 100));

    if (allNumberSame) {
        alert("All number are the same.");
    } else {
        alert("Not all number are the same.");
    }

    if (hasRepeatedNumber) {
        alert("There are repeated numbers.");
    } else {
        alert("There are no repeated numbers.");
    }

} else {
    alert("Invalid Input. Please enter the three-digit number again after refreshing the page.");
}
