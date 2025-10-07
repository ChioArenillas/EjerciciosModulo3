/* 
EJERCICIO 17:
Un isograma es una palabra o frase en la que cada letra aparece el mismo número de veces.
Dado una cadena de texto, comprueba si es un isograma o no y devuelve un mensaje:
"la cadena 'hola mundo' no es un isograma"
*/


export function exercise17(text) {
  const cleanText = text.toLowerCase().replace(/[^a-záéíóúüñ]/g, "");

  const letterCount = {};

  for (const char of cleanText) {
    letterCount[char] = (letterCount[char] || 0) + 1;
  }

  const frequencies = Object.values(letterCount);
  const allEqual = frequencies.every(f => f === frequencies[0]);

  return allEqual
    ? `La cadena '${text}' es un isograma`
    : `La cadena '${text}' no es un isograma`;
}


