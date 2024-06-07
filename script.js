// Analiza pliku JSON
const pies = {
    imie: "Azor", // parametr imie zapisany jako tekst (string)
    wiek: 8, //parament wiek  zapisanym jako liczba (number)
    czySzczeka: true,
    szczeka() {
        console.log("hauhau");
    }
}

// Analiza Metody JSON.parse()
const json = '{"name":"Mango","age":3,"isHappy":true}';
const obj = JSON.parse(json);
console.log(obj);

// wynik w konsoli: {name: 'Mango', age: 3, isHappy: true}
console.log(JSON.parse(json))


// Obsługa błędów
try {
    // kod który powinien się wykonać bez błędów
    const dane = JSON.parse("Jakis, dziwny format json");

} catch (error) {
    // wyłapywanie błędów
    console.log(error.name);
    console.log(error.message);
}

let dane
let zewnetrznySerwis = '{"Jakis, dziwny format json"}';

try {
//     // kod ktory powinien sie wykonac bez bledow
    dane = JSON.parse(zewnetrznySerwis);

} catch (error) {
    // wylapywanie bledow
    console.error(error);
    dane = '{"imie":"","wiek":,"czySzczeka":}'
}


// console.log(dane);