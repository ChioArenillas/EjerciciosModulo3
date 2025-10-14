//COMPLETADO
/* 
EJERCICIO 17:
Un isograma es una palabra o frase en la que cada letra aparece el mismo número de veces.
Dado una cadena de texto, comprueba si es un isograma o no y devuelve un mensaje:
"la cadena 'hola mundo' no es un isograma"
*/

export function exercise17() {
  const text = "Hello World";
  const cleaned = text.replaceAll(" ", "").toLowerCase();
  const repetitions = {};

  cleaned.split('').forEach(char => {
    repetitions[char] = (repetitions[char] || 0) + 1;
  });

  const values = Object.values(repetitions);

  const isIsogram = values.every(v => v === values[0]);

   if (isIsogram) {
    return `La cadena '${text}' es un isograma`;
  } else {
    return `La cadena '${text}' no es un isograma`;
  }
}