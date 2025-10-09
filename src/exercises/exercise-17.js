//COMPLETADO
/* 
EJERCICIO 17:
Un isograma es una palabra o frase en la que cada letra aparece el mismo número de veces.
Dado una cadena de texto, comprueba si es un isograma o no y devuelve un mensaje:
"la cadena 'hola mundo' no es un isograma"
*/

function isIsogram(){
    txt = txt.toLowerCase().replaceAll(' ','');
    const repetitions = {};

    txt.split('').array.forEach(char => {
        if (Object.keys(repetitions).includes(char)){
          repetitions[char] += 1;
        } else {
          repetitions[char] = 1;
        }
    })
    return Object.values(repetitions).findIndex(value => value !== 2) === -1;
}

