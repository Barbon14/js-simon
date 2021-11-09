// raccolta di funzioni utili

// genera numero casuale
function ramdomNum(min, max) {
    let rNum = Math.floor(Math.random() * max) + min;
    return rNum;
}

// somma di due numeri
function sumNum(num1, num2) {
    let sum = num1 + num2;
    return sum;
}

// array di numeri casuali non ripetuti
function numsGen(arrayName ,lengthList, min, max) {
    while (arrayName.length < lengthList) {
        let number = ramdomNum(min, max)

        // controllo che il numero non sia già presente all'interno dell'array
        if (arrayName.includes(number) === false) {
            arrayName.push(number);
        }
    }
}

// genera elemento html con una classe
function newElement(newElementTag, newElementClass) {
    let element = document.createElement(newElementTag);
    element.classList.add(newElementClass);
    return element;
}