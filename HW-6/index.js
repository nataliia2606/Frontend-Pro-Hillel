let birthYear = prompt("Привіт! Введи свій рік народження:");

if (birthYear === null) {
    alert("Шкода, що Ви не захотіли ввести свій рік народження(");
} else {
    let city = prompt("В якому місті ви живете?");

    if (city === null) {
        alert("Шкода, що Ви не захотіли ввести своє місто(");
    } else {
        let favoriteSport = prompt("Який ваш улюблений вид спорту?");

        if (favoriteSport === null) {
            alert("Шкода, що Ви не захотіли ввести свій улюблений вид спорту(");
        } else {

            let thisYear = new Date().getFullYear();
            let age = thisYear - birthYear;
            let message = "";
            message += "Ваш вік - " + age + "\n";

            let cityMessage = "";
            if (city.toLowerCase() === "київ") {
                cityMessage = "Ти живеш у столиці України.\n";
            } else if (city.toLowerCase() === "вашингтон") {
                cityMessage = "Ти живеш у столиці США.\n";
            } else if (city.toLowerCase() === "лондон") {
                cityMessage = "Ти живеш у столиці Великої Британії.\n";
            } else {
                cityMessage = "Ти живеш у місті " + city + ".\n";
            }

            message += cityMessage;

            let sportMessage = "";
            if (favoriteSport.toLowerCase() === "футбол") {
                sportMessage = "Круто! Хочеш стати Ліонелем Мессі?";
            } else if (favoriteSport.toLowerCase() === "плавання") {
                sportMessage = "Круто! Хочеш стати Владиславом Буховим?";
            } else if (favoriteSport.toLowerCase() === "теніс") {
                sportMessage = "Круто! Хочеш стати Рафаелем Надалем?";
            } else {
                sportMessage = "Твій улюблений вид спорту - " + favoriteSport + ".";
            }

            message += sportMessage;

            alert(message);
        }
    }
}
