// Analiza pliku JSON
const pies = {
    imie: "Azor", // parametr imie zapisany jako tekst (string)
    wiek: 8, //parametr wiek  zapisanym jako liczba (number)
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




let dane = '{"Jakis, dziwny format json"}';

// Obsługa błędów
try {
    // kod który powinien się wykonać bez błędów
    const dane = JSON.parse("Jakis, dziwny format json");

} catch (error) {
    // wyłapywanie błędów
    console.log("Name" + error.name);
    console.log("Message" + error.message);

    dane = { imie: "", wiek: 0, czySzczeka: false };
}

// console.log(dane);