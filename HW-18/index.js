function printChoice() {
    for (let i = 0; i < 10; i++) {
        let userInput = prompt("Enter a number greater than 100");

        if (userInput === null || userInput === "") {
            console.log("The entry is canceled or the value is empty. Remaining entry:", userInput);
            break;
        }

        userInput = Number(userInput);

        if (userInput > 100) {
            console.log("Remaining entries:", userInput);
            break;
        } else {
            alert("Please enter a number greater than 100");
        }
    }
}

printChoice();