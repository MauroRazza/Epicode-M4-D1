// Es. 1 

let a = 20;
let b = 30;

function controlloNumeri(a, b) {
    return (a === 50 || b === 50 || a + b === 50);
}

console.log(controlloNumeri(a, b));

// Es. 2

let nome = "Maria";
let posizione = 3;

let risultato = rimuoviC(nome, posizione);

function rimuoviC(str, pos) {
    return str.slice(0, pos) + str.slice(pos + 1);
}

console.log(risultato);

// Es .3

let c = 50;
let d = 50;

function controlloRange(c, d) {
    return ((c >= 40 && c <= 60 && d >= 40 && d <= 60) || (c >= 70 && c <= 100 && d >= 70 && d <= 100));
}

console.log(controlloRange(c, d));

// Es. 4

let città = "New York";

function controlloCittà(city) {
    if (city.startsWith("Los") || city.startsWith("New")) {
        return city;
    } else {
        return false;
    }
}

console.log(controlloCittà(città));

// Es. 5-6

let gruppo = [2, 3, 5, 2, 4];
let risultato2 = sumArray(gruppo);
let risultato3 = checkArray(gruppo);

function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function checkArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1 || arr[i] === 3) {
            return false;
        }
    }
    return true;
}

console.log(risultato2);
console.log(risultato3);

// Es. 7 

let angolo = 140;

function angleType(degrees) {
    if (degrees < 90) {
        return "acuto";
    } else if (degrees === 90) {
        return "retto";
    } else if (degrees > 90 && degrees < 180) {
        return "ottuso";
    } else if (degrees === 180) {
        return "piatto";
    }
}

console.log(angleType(angolo));

// Es. 8 

let nome2 = "Fabbrica Italiana Automobili Torino";

let risultato4 = createAcronym(nome2);

function createAcronym(phrase) {
    let words = phrase.split(" ");
    let acronym = "";
    for (let i = 0; i < words.length; i++) {
        acronym += words[i].charAt(0).toUpperCase();
    }
    return acronym;
}

console.log(risultato4);