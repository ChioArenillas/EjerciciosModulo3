//COMPLETADO

/* 
EJERCICIO 7:
Escribir una función que calcule si una cadena de texto es un palíndromo y
devuelva un mensaje con la cadena de texto y el resultado
Ejemplos:
"La frase 'Dábale arroz a la zorra el abad' es un palíndromo"
"La frase 'hola mundo' NO es un palíndromo"
*/


const sample = "Dabale arroz a la zorra el abad";

function exercise7(text = sample) {
  const cleaned = text.replaceAll(" ", "").toLowerCase();
  const reversed = cleaned.split("").reverse().join("");
  return cleaned === reversed;
}

exercise7();