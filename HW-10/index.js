const exchangeRate = 26;

for (let dollarsAmount= 10; dollarsAmount <= 100; dollarsAmount += 10) {
    const grivnaAmount = exchangeRate * dollarsAmount;
    console.log(`${dollarsAmount} доларів = ${grivnaAmount} гривень`)
}