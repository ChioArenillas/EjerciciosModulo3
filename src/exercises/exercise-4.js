/* 
EJERCICIO 4:
Muestra el resultado de quitar las vocales a un string que pasamos como parámetro:
“H, m lrnng Jvscrpt” // string original: “Hi, I am learning Javascript”
*/

const string = "Hi, I am learning Javascript";

export function removeVowels(string) {
  const result = string.replace(/[aeiou]/gi, '');
  console.log(result);
}

removeVowels(string);
