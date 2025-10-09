//COMPLETADO

/* 
EJERCICIO 6:
Genera un array de 10 números aleatorios entre 0 y 100, calcula el menor y
el mayor y muestra el resultado por pantalla
*/


export function getRandom() {
    const numRand = Math.random() * 100;
    return Math.floor(numRand);
}

export function randomArray(numberOfItems) {
    const randomArray = [];
    const max = 100

    for (let i = 1; i <= numberOfItems; i++) {
        randomArray.push(getRandom(max));
    }
    return randomArray;
}
export function findMinMaxInArray(array) {
    let min;
    let max;

    array.forEach(randomNum => {
        if (min === undefined) {
            min = randomNum;
            max = randomNum;
        } else if (randomNum < min) {
            min = randomNum;  
        } else if (randomNum > max){
            max = randomNum;
        }
    });

    return [min, max];
}

const randArr = randomArray(10, 100)
console.log(getRandom(100));
console.log(randArr);
console.log(findMinMaxInArray(randArr));
